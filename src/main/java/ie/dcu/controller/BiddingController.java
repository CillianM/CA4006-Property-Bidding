package ie.dcu.controller;

import ie.dcu.model.Bid;
import ie.dcu.service.StorageService;
import ie.dcu.socket.BiddingClientSocket;
import org.codehaus.jackson.map.ObjectMapper;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;

@Path("/bid")
public class BiddingController {

    private BiddingClientSocket client;
    private static HashMap<String, BiddingClientSocket> clients = new HashMap<>();

    private final String webSocketAddress = "ws://localhost:8080/bidSocket";

    private void initializeWebSocket(String propertyId) throws URISyntaxException {
        System.out.println("REST service: open websocket client at " + webSocketAddress);
        client = new BiddingClientSocket(new URI(webSocketAddress + "/" + propertyId));
        // add listener
        client.addMessageHandler(new BiddingClientSocket.MessageHandler() {
            public void handleMessage(String message) {
                System.out.println("messagehandler in REST service - process message " + message);
            }
        });
    }

    private void sendMessageOverSocket(String propertyId, String message) {
        client = clients.get(propertyId);
        if (client == null) {
            try {
                initializeWebSocket(propertyId);
            } catch (URISyntaxException e) {
                e.printStackTrace();
            }
            clients.put(propertyId, client);
        }
        client.sendMessage(message);

    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createBid(Bid bid) {
        System.out.println("received event:" + bid);
        LinkedHashMap<String, Bid> propertyBids = StorageService.addBid(bid.getPropertyId(), bid);
        List<Bid> bidList = new ArrayList<>(propertyBids.values());
        ObjectMapper mapper = new ObjectMapper();
        String bidJson = null;
        try {
            bidJson = mapper.writeValueAsString(bidList);
        } catch (IOException e) {
            e.printStackTrace();
        }
        sendMessageOverSocket(bid.getPropertyId(), bidJson);
        return Response.status(201).entity(bidJson).build();
    }

    @GET
    @Path("/{id}")
    public Response getPropertyBids(@PathParam("id") String propertyId) {
        //TODO return bids for a propertyId
        ObjectMapper mapper = new ObjectMapper();
        String bidJson = "";
        try {
            bidJson = mapper.writeValueAsString(StorageService.getPropertyBids(propertyId));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return Response.status(200).entity(bidJson).build();
    }
}
