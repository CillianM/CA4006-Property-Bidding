package ie.dcu.service;

import ie.dcu.model.Bid;
import ie.dcu.model.Property;
import ie.dcu.model.User;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.UUID;

public class StorageService {
    private static HashMap<String, Property> propertyList = new HashMap<>();
    private static HashMap<String, User> userList = new HashMap<>();
    private static HashMap<String, LinkedHashMap<String, Bid>> bidList = new HashMap<>();

    private static String getNewId() {
        return UUID.randomUUID().toString();
    }

    public static User createUser(User user) {
        String uuid = getNewId();
        user.setId(uuid);
        userList.put(uuid, user);
        return user;
    }

    public static void updateUser(User user) {
        userList.put(user.getId(), user);
    }

    public static User getUser(String id) {
        return userList.get(id);
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
}
