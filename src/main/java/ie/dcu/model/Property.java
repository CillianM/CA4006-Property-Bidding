package ie.dcu.model;

import java.util.Date;

public class Property {

    private String id;
    private String name;
    private String creator;
    private String propertyType;
    private String areaCode;
    private int bedroomCount;
    private double price;
    private Date biddingExpiry;

    public Property() {
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getAreaCode() {
        return areaCode;
    }

    public void setAreaCode(String areaCode) {
        this.areaCode = areaCode;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getBedroomCount() {
        return bedroomCount;
    }

    public void setBedroomCount(int bedroomCount) {
        this.bedroomCount = bedroomCount;
    }

    public Date getBiddingExpiry() {
        return biddingExpiry;
    }

    public void setBiddingExpiry(Date biddingExpiry) {
        this.biddingExpiry = biddingExpiry;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }
}
