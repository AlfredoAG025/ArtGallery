import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuPressed = false;

  showMenu() {
    let menu: any = document.getElementById('menu-nav-toggle');
    if (!this.isMenuPressed) {
      menu.classList.remove('hidden');
      this.isMenuPressed = true;
    } else {
      menu.classList.add('hidden');
      this.isMenuPressed = false;
    }

  }
}
