import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements AfterViewInit {
  @ViewChild('cardsWrapper', { static: true })
  cardsWrapper!: ElementRef;

  images = [
    { filename: 'foto3.jpg', alt: 'Immagine 1' },
    { filename: 'foto4.jpg', alt: 'Immagine 1' },
    { filename: 'foto5.jpg', alt: 'Immagine 1' },
    { filename: 'foto6.jpg', alt: 'Immagine 1' },
    { filename: 'foto7.jpg', alt: 'Immagine 1' },
    { filename: 'foto8.jpg', alt: 'Immagine 1' },
    { filename: 'foto9.jpg', alt: 'Immagine 1' },
    // Aggiungi altri oggetti per ulteriori immagini
  ];

  currentIndex = 0; // Indice dell'immagine corrente
  autoScrollInterval = 5000; // Intervallo di scorrimento automatico in millisecondi

  constructor() {}

  ngAfterViewInit(): void {
    // Avvia l'animazione automatica solo in modalità desktop
    if (window.innerWidth >= 769) {
      this.startAutoScroll();
    }
  }

  startAutoScroll(): void {
    // Crea un observable che emette un valore ogni autoScrollInterval millisecondi
    const autoScroll$ = interval(this.autoScrollInterval);

    autoScroll$.subscribe(() => {
      this.scrollRight();
    });
  }

  scrollLeft(): void {
    // Sposta il wrapper delle cards a sinistra
    this.cardsWrapper.nativeElement.scrollLeft -= 200;
  }

  scrollRight(): void {
    // Sposta il wrapper delle cards a destra
    this.cardsWrapper.nativeElement.scrollLeft += 200;

    // Verifica se si è raggiunta l'ultima immagine e riporta l'indice a 0
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  onResize(event: { target: { innerWidth: any; }; }): void {
    const screenWidth = event.target.innerWidth;
    const cardWrapper = this.cardsWrapper.nativeElement;
    const cardWidth = cardWrapper.children[0].offsetWidth;
    const cardsPerScreen = Math.floor(screenWidth / cardWidth);
    const newWidth = cardsPerScreen * cardWidth;
    cardWrapper.style.width = newWidth + 'px';
  }
}
