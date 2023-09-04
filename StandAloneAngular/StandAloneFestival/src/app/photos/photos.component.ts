import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  @ViewChild('cardContainer', { static: true })
  cardContainer!: ElementRef;

  images = [
    { filename: 'foto1.jpg', alt: 'Immagine 1' },

    { filename: 'foto2.jpg', alt: 'Immagine 1' },

    { filename: 'foto3.jpg', alt: 'Immagine 1' },

    { filename: 'foto4.jpg', alt: 'Immagine 1' },

    { filename: 'foto5.jpg', alt: 'Immagine 1' },

    { filename: 'foto6.jpg', alt: 'Immagine 1' },

    { filename: 'foto7.jpg', alt: 'Immagine 1' },

    { filename: 'foto8.jpg', alt: 'Immagine 1' },

    { filename: 'foto9.jpg', alt: 'Immagine 1' },

    // Aggiungi altri oggetti per ulteriori immagini
  ];

  scrollLeft(): void {
    this.cardContainer.nativeElement.scrollLeft -= 200; // sposta la scrollbar a sinistra di 200px
  }

  scrollRight(): void {
    this.cardContainer.nativeElement.scrollLeft += 200; // sposta la scrollbar a destra di 200px
  }

  onResize(event: { target: { innerWidth: any; }; }): void {
    const screenWidth = event.target.innerWidth;
    const cardContainer = this.cardContainer.nativeElement;
    const cardWidth = cardContainer.children[0].offsetWidth;
    const cardsPerScreen = Math.floor(screenWidth / cardWidth);
    const newWidth = cardsPerScreen * cardWidth;
    cardContainer.style.width = newWidth + 'px';
  }
}
