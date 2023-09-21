import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isDropdownOpen = false;
  isNavbarVisible = true;
  private lastScrollTop = 0;

  toggleDropdown() {
    if (window.innerWidth <= 767) {
      // Se la larghezza della finestra è inferiore o uguale a 767px (modalità mobile)
      // this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const st = window.pageYOffset || document.documentElement.scrollTop;
  //   this.isNavbarVisible = st < this.lastScrollTop;
  //   this.lastScrollTop = st;
  // }


}
