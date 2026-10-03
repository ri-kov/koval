package com.valenauto.backend;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RestController
public class HelloController {

    private final VehicleRepository vehicleRepository;
    private final VehicleFeatureRepository vehicleFeatureRepository;

    public HelloController(VehicleRepository vehicleRepository, VehicleFeatureRepository vehicleFeatureRepository) {
        this.vehicleRepository = vehicleRepository;
        this.vehicleFeatureRepository = vehicleFeatureRepository;
    }

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from backend";
    }

    @GetMapping("/api/vehicles") //recievce data
    public List<Vehicle> getVehicles() {
        return vehicleRepository.findAll();
    }

    @GetMapping("/api/vehicles/{id}")
    public Vehicle getVehicleById(@PathVariable Long id) {
        return vehicleRepository.findById(id).orElse(null);
    }

    @PostMapping("/api/vehicles") //send data
    public Vehicle addVehicle(@RequestBody Vehicle vehicle) { //spring converts json to vehicle info
        return vehicleRepository.save(vehicle);
    }

    @GetMapping("/api/vehicles/{id}/features")
    public List<VehicleFeature> getVehicleFeatures(@PathVariable Long id) {
        return vehicleFeatureRepository.findByVehicleId(id);
    }
}
