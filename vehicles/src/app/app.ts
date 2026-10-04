import { Vehicle } from './vehicle';
import { AfterViewInit, Component, signal, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet]
})

export class App implements AfterViewInit{
  protected readonly title = signal('vehicles');

  selectedImage = this.vehicle.carImages[0];

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

  showPreviousImage() {
    const currentIndex = this.vehicle.carImages.indexOf(this.selectedImage);
    if (currentIndex > 0) {
      this.selectedImage = this.vehicle.carImages[currentIndex - 1];

      this.scrollSelectedThumbnailIntoView();
    }
  }

  showNextImage() {
    const currentIndex = this.vehicle.carImages.indexOf(this.selectedImage);
    if (currentIndex < this.vehicle.carImages.length-1) {
      this.selectedImage = this.vehicle.carImages[currentIndex +1];

      this.scrollSelectedThumbnailIntoView();
    }
  }

  scrollSelectedThumbnailIntoView() {
    setTimeout(() => {
      const container = this.thumbnailsContainer.nativeElement;

      const activeThumbnail = container.querySelector('.thumbnail.active');

      if(activeThumbnail) {
        activeThumbnail.scrollIntoView({
          behaviour: 'smooth',
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
