import { Component } from '@angular/core';

@Component({
  selector: 'app-gloamsession',
  templateUrl: './gloamsession.component.html',
  styleUrls: ['./gloamsession.component.scss']
})
export class GloamsessionComponent {

  isSection1Open = false;
  isSection2Open = false;
  isSection3Open = false;
  isSection4Open = false;
  isSection5Open = false;

  // Funzione per gestire l'apertura e la chiusura di un accordion
  toggleAccordion(section: number): void {
    switch (section) {
      case 1:
        this.isSection1Open = !this.isSection1Open;
        break;
      case 2:
        this.isSection2Open = !this.isSection2Open;
        break;
      case 3:
        this.isSection3Open = !this.isSection3Open;
        break;
      case 4:
        this.isSection3Open = !this.isSection4Open;
        break;
      case 5:
        this.isSection3Open = !this.isSection5Open;
        break;
      // Aggiungi altri casi per ulteriori sezioni
    }
  }

}
