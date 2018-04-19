package ie.dcu.security;

import ie.dcu.model.User;
import ie.dcu.service.StorageService;

import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class AuthProvider {


    public static boolean isValidLogin(HttpServletRequest request){
        String authorization = request.getHeader("Authorization");
        if (authorization != null && authorization.startsWith("Basic")) {
            String credentials = authorization.substring("Basic".length()).trim();
            byte[] decoded = DatatypeConverter.parseBase64Binary(credentials);
            String decodedString = new String(decoded);
            String[] actualCredentials = decodedString.split(":");
            String userId = actualCredentials[0];
            String attemptedPassword = actualCredentials[1];

            User user = StorageService.getUser(userId);
            if(user != null){
                String storedPassword = user.getPassword();
                String hashPassword = hashString(attemptedPassword);
                return storedPassword.equals(hashPassword);
            }
        }
        return false;
    }

    public static boolean isValidUser(HttpServletRequest request){
        String authorization = request.getHeader("Authorization");
        if (authorization != null && authorization.startsWith("Basic")) {
            String credentials = authorization.substring("Basic".length()).trim();
            byte[] decoded = DatatypeConverter.parseBase64Binary(credentials);
            String decodedString = new String(decoded);
            String[] actualCredentials = decodedString.split(":");
            String userId = actualCredentials[0];
            String attemptedToken = actualCredentials[1];

            String currentToken = StorageService.getUserToken(userId);
            if(currentToken != null){
                return currentToken.equals(attemptedToken);
            }
        }
        return false;
    }

    public static String hashString(String s){
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
            messageDigest.update(s.getBytes());
            return new String(messageDigest.digest());
        } catch (NoSuchAlgorithmException e){
            return null;
        }
    }
}
