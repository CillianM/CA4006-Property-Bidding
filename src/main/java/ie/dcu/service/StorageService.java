package ie.dcu.service;

import ie.dcu.model.Bid;
import ie.dcu.model.Property;
import ie.dcu.model.User;

import java.util.*;

public class StorageService {
    private static HashMap<String, Property> propertyList = new HashMap<>();
    private static HashMap<String, String> tokenList = new HashMap<>();
    private static HashMap<String, User> userList = new HashMap<>();
    private static HashMap<String, LinkedHashMap<String, Bid>> bidList = new HashMap<>();

    private static String getNewId() {
        return UUID.randomUUID().toString();
    }

    public static String createUserToken(String userName){
        String uuid = getNewId();
        tokenList.put(userName, uuid);
        return uuid;
    }

    public static void deleteUserToken(String userName){
        tokenList.remove(userName);
    }

    public static String getUserToken(String id) {
        return tokenList.get(id);
    }

    public static User createUser(User userToCreate) {
        User user = new User();
        user.setPassword(userToCreate.getPassword());
        user.setName(userToCreate.getName());
        userList.put(user.getName(), user);
        return userToCreate;
    }

    public static void updateUser(User user) {
        userList.put(user.getName(), user);
    }

    public static User getUser(String id) {
        return userList.get(id);
    }

    public static Collection<User> getUsers() {
        List<User> users = new ArrayList<>();
        for(User user: userList.values()){
            user.setPassword("");
            users.add(user);
        }
        return users;
    }


    public static Property createProperty(Property property) {
        String uuid = getNewId();
        property.setId(uuid);
        propertyList.put(uuid, property);
        return property;
    }

    public static void updateProperty(Property property) {
        propertyList.put(property.getId(), property);
    }

    public static Property getProperty(String id) {
        return propertyList.get(id);
    }

    public static List<Property> getUserProperties(String uesrname) {
        List<Property> userProperties = new ArrayList<>();
        for(Property  property: propertyList.values()){
            if(property.getCreator().equals(uesrname)){
                userProperties.add(property);
            }
        }
        return userProperties;
    }

    public static Collection<Property> getProperties() {
        return propertyList.values();
    }

    public static LinkedHashMap<String, Bid> addBid(String propertyId, Bid bid) {
        String uuid = getNewId();
        bid.setId(uuid);
        LinkedHashMap<String, Bid> propertyBids = bidList.getOrDefault(propertyId, new LinkedHashMap<>());
        propertyBids.put(uuid, bid);
        bidList.put(propertyId, propertyBids);
        return propertyBids;
    }

    public static LinkedHashMap<String, Bid> removeBid(String propertyId, Bid bid) {
        LinkedHashMap<String, Bid> propertyBids = bidList.getOrDefault(propertyId, new LinkedHashMap<>());
        propertyBids.remove(bid.getPropertyId());
        return bidList.put(propertyId, propertyBids);
    }

    public static LinkedHashMap<String, Bid> getPropertyBids(String propertyId) {
        return bidList.get(propertyId);
    }

    public static List<Bid> getUserPropertyBids(String propertyId, String userId) {
        LinkedHashMap<String, Bid>  propertyBids = bidList.get(propertyId);
        List<Bid> userBids = new ArrayList<>();
        for(Bid bid: propertyBids.values()){
            if(bid.getUserId().equals(userId)){
                userBids.add(bid);
            }
        }
        return userBids;
    }

    public static List<Bid> getUserBids(String userId) {
        List<Bid> userBids = new ArrayList<>();
        for(LinkedHashMap<String, Bid>  propertyBids: bidList.values()){
            for(Bid bid: propertyBids.values()){
                if(bid.getUserId().equals(userId)){
                    userBids.add(bid);
                }
            }
        }
        return userBids;
    }
}
