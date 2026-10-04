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
export class VehiclePage {}