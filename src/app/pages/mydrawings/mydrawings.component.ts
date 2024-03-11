import {Component, OnInit} from '@angular/core';
import {Drawing} from "../../interfaces/drawing";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mydrawings',
  templateUrl: './mydrawings.component.html',
  styleUrl: './mydrawings.component.css'
})
export class MydrawingsComponent implements OnInit {

  constructor(private router: Router) {
  }

  drawings: Drawing[] = [];

  ngOnInit() {
    fetch('http://127.0.0.1:8081/drawings').then(response => {
      return response.json()
    }).then(data => {
      console.log(data)
      this.drawings = data;
    })
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
