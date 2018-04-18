package ie.dcu.socket;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

@ServerEndpoint(value = "/bidSocket/{propertyId}")
public class BiddingWebSocket {

    private static HashMap<String, Set<Session>> peers = new HashMap<>();

    @OnMessage
    public String onMessage(String message, Session session, @PathParam("propertyId") String propertyId) {
        try {
            for (Session s : peers.get(propertyId)) {
                try {
                    s.getBasicRemote().sendText(message);
                } catch (IOException e) {
                    e.printStackTrace();
                }

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "message was received by socket mediator and processed: " + message;
    }

    @OnOpen
    public void onOpen(Session session, @PathParam("propertyId") String propertyId) {
        Set<Session> peerSessions;
        peerSessions = peers.get(propertyId);
        if (peerSessions == null) {
            peerSessions = Collections.synchronizedSet(new HashSet());
        }
        peerSessions.add(session);
        peers.put(propertyId, peerSessions);


        try {
            session.getBasicRemote().sendText("Connected to socket for propertyId: " + propertyId);
        } catch (IOException e) {
        }
    }

    @OnClose
    public void onClose(Session session, @PathParam("propertyId") String propertyId) {
        peers.get(propertyId).remove(session);
    }
}
