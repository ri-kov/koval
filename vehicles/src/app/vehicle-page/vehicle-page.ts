import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
    selector: 'app-vehicle-page',
    standalone: true,
    templateUrl: './vehicle-page.html',
    styleUrl: './vehicle-page.css'
})
export class VehiclePage {
    vehicle?: Vehicle;
    features: string[] = [];
    carImages: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private vehicleService: VehicleService
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const slug = this.route.snapshot.paramMap.get('slug');
            if (!slug) {
                return;
            }

            this.vehicleService.getVehicleBySlug(slug).subscribe(vehicle => {
                this.vehicle = vehicle;
                this.vehicleService.getFeatures(vehicle.id).subscribe(features => {
                    this.features = features.map(item => item.feature);
                });

                this.vehicleService.getImages(vehicle.id).subscribe(images => {
                    this.carImages = images.map(item => item.imageUrl);
                });
            });
        });
    }
}