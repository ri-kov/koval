import { Vehicle } from './vehicle';
import { AfterViewInit, Component, signal, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements AfterViewInit{
  protected readonly title = signal('vehicles');

  vehicle: Vehicle = {
    year: 2019,
    make: 'Hyundai',
    model: 'Sonata',
    trim: 'LE',
    price: 11995,
    mileage: 89500,
    engine: '2.4L 4-Cylinder',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    drivetrain: 'FWD',
    extColor: 'Grey',
    intColor: 'Black',
    seats: 5,
    certification: 'Safety Certified',
    title: 'Clean Title',
    owners: 1,
    description: 'This 2019 Hyundai Sonata LE is a reliable, comfortable, and fuel-efficient sedan with low kilometres. Well maintained and in great overall condition, it offers a smooth ride, modern features, and excellent value. This vehicle has been safety inspected, comes with a clean title, and is ready for its next owner. Ideal for commuting, family use, or anyone looking for a dependable sedan.',
    carImages: [
      'pictures/cars/2019sonatasample/1.JPG',
      'pictures/cars/2019sonatasample/2.JPG',
      'pictures/cars/2019sonatasample/3.JPG',
      'pictures/cars/2019sonatasample/4.JPG',
      'pictures/cars/2019sonatasample/5.JPG',
      'pictures/cars/2019sonatasample/6.JPG',
      'pictures/cars/2019sonatasample/7.JPG',
    ]
  };

  selectedImage = this.vehicle.carImages[0];

  showLeftArrow = false;
  showRightArrow = true;

  selectImage(image: string) {
    this.selectedImage = image;
  }

  @ViewChild('thumbnailsContainer')
  thumbnailsContainer!: ElementRef;

  scrollThumbnails(direction: number) {
    const container = this.thumbnailsContainer.nativeElement;

    container.scrollBy({
      left: direction * 250,
      behaviour: 'smooth'
    });
  }

  updateArrows() {
    const container = this.thumbnailsContainer.nativeElement;

    this.showLeftArrow = container.scrollLeft > 0;

    this.showRightArrow = container.scrollLeft + container.clientWidth < container.scrollWidth - 1;
  }

  ngAfterViewInit() {
    this.updateArrows();
  }
}
