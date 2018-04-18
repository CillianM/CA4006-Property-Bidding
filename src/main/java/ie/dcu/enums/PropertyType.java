package ie.dcu.enums;

public enum  PropertyType {
    APARTMENT("APARTMENT"),
    HOUSE("HOUSE");

    private final String propertyType;

    PropertyType(final String propertyType) {
        this.propertyType = propertyType;
    }

    @Override
    public String toString() {
        return propertyType;
    }
}
