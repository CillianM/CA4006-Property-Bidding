package ie.dcu.socket;

import javax.websocket.*;
import java.net.URI;

// based on http://stackoverflow.com/questions/26452903/javax-websocket-client-simple-example

@ClientEndpoint
public class BiddingClientSocket {

    private Session userSession = null;
    private MessageHandler messageHandler;

    public BiddingClientSocket(URI endpointURI) {
        try {
            WebSocketContainer container = ContainerProvider.getWebSocketContainer();
            container.connectToServer(this, endpointURI);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @OnOpen
    public void onOpen(Session userSession) {
        this.userSession = userSession;
    }

    @OnClose
    public void onClose(Session userSession, CloseReason reason) {
        this.userSession = null;
    }

    @OnMessage
    public void onMessage(String message) {
        if (this.messageHandler != null) {
            this.messageHandler.handleMessage(message);
        }
    }

    public void addMessageHandler(MessageHandler msgHandler) {
        this.messageHandler = msgHandler;
    }

    public void sendMessage(String message) {
        this.userSession.getAsyncRemote().sendText(message);
    }

    public interface MessageHandler {

        void handleMessage(String message);
    }

}
