package com.valenauto.backend;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String make;
    private String model;
    private int year;
    private int mileage;
    private double price;
    private String trim;
    private String engine;
    private String transmission;
    private String fuel;
    private String drivetrain;
    private String extColor;
    private String intColor;
    private int seats;
    private String certification;
    private String special;
    private String title;
    private int owners;
    private String bodyStyle;
    private double engineSize;
    private String description;

    public Vehicle() {

    }

    public Vehicle(Long id, String make, String model, int year, int mileage, double price, String trim, String engine, String transmission,
                   String fuel, String drivetrain, String extColor, String intColor, int seats, String certification, String special, String title,
                   int owners, String bodyStyle, double engineSize, String description) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.price = price;
        this.trim = trim;
        this.engine = engine;
        this.transmission = transmission;
        this.fuel = fuel;
        this.drivetrain = drivetrain;
        this.extColor = extColor;
        this.intColor = intColor;
        this.seats = seats;
        this.certification = certification;
        this.special = special;
        this.title = title;
        this.owners = owners;
        this.bodyStyle = bodyStyle;
        this.engineSize = engineSize;
        this.description = description;
    }

    public Long geiId() {
        return id;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    public int getMileage() {
        return mileage;
    }

    public double getPrice() {
        return price;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setMileage(int mileage) {
        this.mileage = mileage;
    }

    public void setPrice(double price) {
        this.price = price;
    }
    public void setTrim(String trim) {
        this.trim = trim;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public void setDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
    }

    public void setExtColor(String extColor) {
        this.extColor = extColor;
    }

    public void setIntColor(String intColor) {
        this.intColor = intColor;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public void setCertification(String certification) {
        this.certification = certification;
    }

    public void setSpecial(String special) {
        this.special = special;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setOwners(int owners) {
        this.owners = owners;
    }

    public void setBodyStyle(String bodyStyle) {
        this.bodyStyle = bodyStyle;
    }

    public void setEngineSize(double engineSize) {
        this.engineSize = engineSize;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTrim() {
        return trim;
    }

    public String getEngine() {
        return engine;
    }

    public String getTransmission() {
        return transmission;
    }

    public String getFuel() {
        return fuel;
    }

    public String getDrivetrain() {
        return drivetrain;
    }

    public String getExtColor() {
        return extColor;
    }

    public String getIntColor() {
        return intColor;
    }

    public int getSeats() {
        return seats;
    }

    public String getCertification() {
        return certification;
    }

    public String getSpecial() {
        return special;
    }

    public String getTitle() {
        return title;
    }

    public int getOwners() {
        return owners;
    }

    public String getBodyStyle() {
        return bodyStyle;
    }

    public double getEngineSize() {
        return engineSize;
    }

    public String getDescription() {
        return description;
    }
}
