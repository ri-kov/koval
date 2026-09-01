package com.valenauto.backend;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from backend";
    }

    @GetMapping("/api/car")
    public Vehicle getCar() {
        Vehicle car = new Vehicle(
                "Mazda",
                "Mazda 3",
                2018,
                192500,
                12500
        );

        return car;
    }

    @GetMapping("/api/vehicles")
    public List<Vehicle> getVehicles() {
        List<Vehicle> vehicles = new ArrayList<>();

        vehicles.add(new Vehicle (
                "Mazda",
                "Mazda 3",
                2018,
                192500,
                12500
        ));

        vehicles.add(new Vehicle (
                "Honda",
                "Civic",
                2015,
                180000,
                9500
        ));

        vehicles.add(new Vehicle (
                "Subaru",
                "Legacy",
                2016,
                160000,
                11000
        ));

        return vehicles;
    }

}
