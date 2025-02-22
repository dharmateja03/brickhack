package com.brickhack.marketplace.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "listings")
public class ApartmentListing extends Listing {
    private double rent;
    private String address;
    private boolean isSublet;

    public ApartmentListing() {
    }

    public ApartmentListing(String title, String ownerId, String description, double rent, String address, boolean isSublet) {
        super(title, ownerId, description);
        this.rent = rent;
        this.address = address;
        this.isSublet = isSublet;
    }

    public double getRent() {
        return rent;
    }

    public void setRent(double rent) {
        this.rent = rent;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isSublet() {
        return isSublet;
    }

    public void setSublet(boolean sublet) {
        isSublet = sublet;
    }
}
