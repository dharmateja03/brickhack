package com.brickhack.marketplace.repository;

import com.brickhack.marketplace.model.Listing;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ListingRepository extends MongoRepository<Listing, String> {
    // You can add methods that use type checking or filtering based on class if needed
}