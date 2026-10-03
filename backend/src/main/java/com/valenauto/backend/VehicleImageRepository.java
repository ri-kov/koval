package com.valenauto.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VehicleImageRepository extends JpaRepository<VehicleImage, Long> {
    List<VehicleImage> findByVehicleIdOrderBySortOrderAsc(Long vehicleId);
}
