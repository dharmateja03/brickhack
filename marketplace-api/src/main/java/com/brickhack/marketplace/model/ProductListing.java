package com.brickhack.marketplace.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "listings")
public class ProductListing extends Listing {
    private double price;
    private String category;

    public ProductListing() {
    }

    public ProductListing(String title, String ownerId, String description, double price, String category) {
        super(title, ownerId, description);
        this.price = price;
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
