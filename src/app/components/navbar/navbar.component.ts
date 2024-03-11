import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {
  }

  isMenuPressed = false;

  navigateTo(route: string) {
    this.router.navigate([route]);
  }


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
