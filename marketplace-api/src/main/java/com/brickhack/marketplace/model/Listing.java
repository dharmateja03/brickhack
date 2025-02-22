package com.brickhack.marketplace.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "listings")
public abstract class Listing {
    @Id
    private String id;
    private String title;
    private String ownerId;
    private String description;

    // Constructors, getters, and setters
    public Listing() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(String ownerId) {
        this.ownerId = ownerId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Listing(String title, String ownerId, String description) {
        this.title = title;
        this.ownerId = ownerId;
        this.description = description;
    }


}
