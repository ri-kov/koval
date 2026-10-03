package com.valenauto.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "vehicle_image")
public class VehicleImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "vehicle_id")
    private Long vehicleId;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "sort_order")
    private String sortOrder;

    public VehicleImage() {

    }

    public VehicleImage(Long vehicleId, String imageUrl, String sortOrder) {
        this.vehicleId = vehicleId;
        this.imageUrl = imageUrl;
        this.sortOrder = sortOrder;
    }

    public Long getId() {
        return id;
    }

    public Long getVehicleId() {
        return vehicleId;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getSortOrder() {
        return sortOrder;
    }

    public void setVehicleId(Long vehicleId) {
        this.vehicleId = vehicleId;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setSortOrder(String sortOrder) {
        this.sortOrder = sortOrder;
    }
}
