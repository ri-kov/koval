package com.valenauto.backend;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "https://ri-kov.github.io")
@RestController
public class HelloController {

    private final VehicleRepository vehicleRepository;
    private final VehicleFeatureRepository vehicleFeatureRepository;
    private final VehicleImageRepository vehicleImageRepository;

    public HelloController(VehicleRepository vehicleRepository, VehicleFeatureRepository vehicleFeatureRepository, VehicleImageRepository vehicleImageRepository) {
        this.vehicleRepository = vehicleRepository;
        this.vehicleFeatureRepository = vehicleFeatureRepository;
        this.vehicleImageRepository = vehicleImageRepository;
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

    @GetMapping("/api/vehicles/{id}/images")
    public List<VehicleImage> getVehicleImages(@PathVariable Long id) {
        return vehicleImageRepository.findByVehicleIdOrderBySortOrderAsc(id);
    }

    @GetMapping("/api/vehicles/slug/{slug}")
    public Vehicle getVehicleBySlug(@PathVariable String slug) {
        return vehicleRepository.findBySlug(slug).orElse(null);
    }
}
