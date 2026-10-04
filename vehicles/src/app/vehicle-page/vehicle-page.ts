import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
    selector: 'app-vehicle-page',
    standalone: true,
    templateUrl: './vehicle-page.html',
    styleUrl: './vehicle-page.css'
})
export class VehiclePage implements OnInit {
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
                    this.carImages = images.map(item => '/' + item.imageUrl);
                    this.selectedImage = this.carImages[0] ?? '';

                    setTimeout(() => {
                    this.updateArrows();
                    });
                });
            });
        });
    }

    selectedImage = '';

    showLeftArrow = false;
    showRightArrow = true;

    selectImage(image: string) {
    this.selectedImage = image;
    }

    @ViewChild('thumbnailsContainer')
    thumbnailsContainer!: ElementRef; //saves as a variable to work w it later

    scrollThumbnails(direction: number) {
    const container = this.thumbnailsContainer.nativeElement;

    container.scrollBy({
      left: direction * 250,
      behavior: 'smooth'
    });
  }

    updateArrows() {
        const container = this.thumbnailsContainer.nativeElement;
        this.showLeftArrow = container.scrollLeft > 0;
        this.showRightArrow = container.scrollLeft + container.clientWidth < container.scrollWidth - 1;
    }

    showPreviousImage() {
        const currentIndex = this.carImages.indexOf(this.selectedImage);
        if (currentIndex > 0) {
        this.selectedImage = this.carImages[currentIndex - 1];

          this.scrollSelectedThumbnailIntoView();
        }
      }

      showNextImage() {
        const currentIndex = this.carImages.indexOf(this.selectedImage);
        if (currentIndex < this.carImages.length-1) {
          this.selectedImage = this.carImages[currentIndex +1];

          this.scrollSelectedThumbnailIntoView();
        }
    }
    
    scrollSelectedThumbnailIntoView() {
        setTimeout(() => {
          const container = this.thumbnailsContainer.nativeElement;

          const activeThumbnail = container.querySelector('.thumbnail.active');

        if(activeThumbnail) {
            activeThumbnail.scrollIntoView({
              behavior: 'smooth',
              inline: 'nearest',
              block: 'nearest'
            });
        }
    });
  }

    menuOpen = false;
    openMenu(): void {
        this.menuOpen = true;
    }

    closeMenu(): void {
        this.menuOpen = false;
    }
}