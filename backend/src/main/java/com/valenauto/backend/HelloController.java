package com.valenauto.backend;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RestController
public class HelloController {

    private final VehicleRepository vehicleRepository;

    public HelloController(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

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

    @GetMapping("/api/vehicles") //recievce data
    public List<Vehicle> getVehicles() {
        return vehicleRepository.findAll();
    }

    @PostMapping("/api/vehicles") //send data
    public Vehicle addVehicle(@RequestBody Vehicle vehicle) { //spring converts json to vehicle info
        return vehicleRepository.save(vehicle);
    }
}
