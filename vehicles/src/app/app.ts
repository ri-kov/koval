import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vehicle } from './vehicle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('vehicles');

  vehicle = {
    year: 2019,
    make: 'Hyundai',
    model: 'Sonata',
    trim: 'LE',
    price: 11995,
    mileage: 89500
  }
}
