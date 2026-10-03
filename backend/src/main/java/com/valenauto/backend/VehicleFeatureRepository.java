package com.valenauto.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VehicleFeatureRepository extends JpaRepository<VehicleFeature, Long>{
    List<VehicleFeature> findByVehicleId(Long vehicleId);
}
