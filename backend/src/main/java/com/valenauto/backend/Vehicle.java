package com.valenauto.backend;

public class Vehicle {
    private String make;
    private String model;
    private int year;
    private int mileage;
    private double price;

    public Vehicle(String make, String model, int year, int mileage, double price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.price = price;
    }
}
