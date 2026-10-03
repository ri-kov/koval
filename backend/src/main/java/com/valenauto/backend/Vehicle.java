package com.valenauto.backend;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

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
    @Column(name = "extcolor")
    private String extColor;
    @Column(name = "intcolor")
    private String intColor;
    private Integer seats;
    private String certification;
    private String special;
    private String title;
    private Integer owners;
    @Column(name = "bodystyle")
    private String bodyStyle;
    @Column(name = "enginesize")
    private Double engineSize;
    private String description;
    private String status;

    public Vehicle() {

    }

    public Vehicle(Long id, String make, String model, int year, int mileage, double price, String trim, String engine, String transmission,
                   String fuel, String drivetrain, String extColor, String intColor, Integer seats, String certification, String special, String title,
                   Integer owners, String bodyStyle, Double engineSize, String description, String status) {
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
        this.status = status;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) { this.status = status;}

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

    public void setSeats(Integer seats) {
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

    public void setOwners(Integer owners) {
        this.owners = owners;
    }

    public void setBodyStyle(String bodyStyle) {
        this.bodyStyle = bodyStyle;
    }

    public void setEngineSize(Double engineSize) {
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

    public Integer getSeats() {
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

    public Integer getOwners() {
        return owners;
    }

    public String getBodyStyle() {
        return bodyStyle;
    }

    public Double getEngineSize() {
        return engineSize;
    }

    public String getDescription() {
        return description;
    }
}
