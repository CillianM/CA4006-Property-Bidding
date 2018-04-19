package ie.dcu.controller;

import ie.dcu.model.Bid;
import ie.dcu.security.AuthProvider;
import ie.dcu.service.StorageService;
import ie.dcu.socket.BiddingClientSocket;
import org.codehaus.jackson.map.ObjectMapper;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
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
    public Response createBid(@Context HttpServletRequest request, Bid bid) {
        if (!AuthProvider.isValidUser(request)) {
            return Response.status(401).build();
        }
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
    public Response getPropertyBids(@Context HttpServletRequest request, @PathParam("id") String propertyId) throws Exception {
        if(!AuthProvider.isValidUser(request)){
            return Response.status(401).build();
        }
        return Response.status(200).entity(new ObjectMapper().writeValueAsString(StorageService.getPropertyBids(propertyId))).build();
    }

    @GET
    @Path("/{id}/{username}")
    public Response getUserPropertyBids(@Context HttpServletRequest request, @PathParam("id") String propertyId, @PathParam("id") String username) throws Exception {
        if(!AuthProvider.isValidUser(request)){
            return Response.status(401).build();
        }
        return Response.status(200).entity(new ObjectMapper().writeValueAsString(StorageService.getUserPropertyBids(propertyId, username))).build();
    }

    @GET
    @Path("/user/{username}")
    public Response getUserBids(@Context HttpServletRequest request, @PathParam("username") String username) throws Exception {
        if(!AuthProvider.isValidUser(request)){
            return Response.status(401).build();
        }
        return Response.status(200).entity(new ObjectMapper().writeValueAsString(StorageService.getUserBids(username))).build();
    }
}
