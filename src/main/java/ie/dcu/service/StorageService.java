package ie.dcu.service;

import ie.dcu.model.Bid;
import ie.dcu.model.Booking;
import ie.dcu.model.Property;
import ie.dcu.model.User;

import java.util.*;

public class StorageService {
    private static HashMap<String, Property> propertyList = new HashMap<>();
    private static HashMap<String, String> tokenList = new HashMap<>();
    private static HashMap<String, User> userList = new HashMap<>();
    private static HashMap<String, LinkedHashMap<String, Bid>> bidList = new HashMap<>();
    private static HashMap<String, LinkedHashMap<String, Booking>> bookingList = new HashMap<>();


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

    public static List<User> getUsers() {
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

    public static List<Property> getProperties() {
        return new ArrayList<>(propertyList.values());
    }

    public static LinkedHashMap<String, Bid> addBid(String propertyId, Bid bid) {
        LinkedHashMap<String, Bid> propertyBids = bidList.getOrDefault(propertyId, new LinkedHashMap<>());
        propertyBids.put(bid.getUserId(), bid);
        bidList.put(propertyId, propertyBids);
        return propertyBids;
    }

    public static LinkedHashMap<String, Bid> removeBid(String propertyId, String bidId) {
        LinkedHashMap<String, Bid> propertyBids = bidList.getOrDefault(propertyId, new LinkedHashMap<>());
        propertyBids.remove(bidId);
        return bidList.put(propertyId, propertyBids);
    }

    public static LinkedHashMap<String, Bid> getPropertyBids(String propertyId) {
        return bidList.get(propertyId);
    }

    public static Bid getUserPropertyBid(String propertyId, String userId) {
        LinkedHashMap<String, Bid>  propertyBids = bidList.get(propertyId);
        return propertyBids.get(userId);
    }

    public static List<Bid> getUserBids(String userId) {
        List<Bid> userBids = new ArrayList<>();
        for (LinkedHashMap<String, Bid> propertyBids : bidList.values()) {
            Bid userBid = propertyBids.get(userId);
            if (userBid != null) {
                userBids.add(userBid);
            }
        }
        return userBids;
    }

    public static LinkedHashMap<String, Booking> addBooking(String propertyId, Booking booking) {
        String uuid = getNewId();
        booking.setId(uuid);
        LinkedHashMap<String, Booking> propertyBoookings = bookingList.getOrDefault(propertyId, new LinkedHashMap<>());
        propertyBoookings.put(uuid, booking);
        bookingList.put(propertyId, propertyBoookings);
        return propertyBoookings;
    }

    public static LinkedHashMap<String, Booking> removeBooking(String propertyId, String bidId) {
        LinkedHashMap<String, Booking> propertyBoookings = bookingList.getOrDefault(propertyId, new LinkedHashMap<>());
        propertyBoookings.remove(bidId);
        return bookingList.put(propertyId, propertyBoookings);
    }

    public static List<Booking> getUserBookings(String userId) {
        List<Booking> userBookies = new ArrayList<>();
        for (LinkedHashMap<String, Booking> propertyBoookings : bookingList.values()) {
            for (Booking bid : propertyBoookings.values()) {
                if(bid.getUserId().equals(userId)){
                    userBookies.add(bid);
                }
            }
        }
        return userBookies;
    }

    public static LinkedHashMap<String, Booking> getPropertyBookings(String propertyId) {
        return bookingList.get(propertyId);
    }

    public static List<Booking> getUserPropertyBookings(String propertyId, String username) {
        LinkedHashMap<String, Booking> propertyBoookings = bookingList.get(propertyId);
        List<Booking> userBids = new ArrayList<>();
        for (Booking booking : propertyBoookings.values()) {
            if (booking.getUserId().equals(username)) {
                userBids.add(booking);
            }
        }
        return userBids;
    }
}
