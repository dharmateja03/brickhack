package com.brickhack.marketplace.service;

import com.brickhack.marketplace.model.Listing;
import com.brickhack.marketplace.repository.ListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarketplaceService {

    private final ListingRepository listingRepository;

    @Autowired
    public MarketplaceService(ListingRepository listingRepository) {
        this.listingRepository = listingRepository;
    }

    public Listing addListing(Listing listing) {
        return listingRepository.save(listing);
    }

    // Other business methods...
}

