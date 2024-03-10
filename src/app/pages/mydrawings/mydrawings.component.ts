import { Component } from '@angular/core';
import {Drawing} from "../../interfaces/drawing";

@Component({
  selector: 'app-mydrawings',
  templateUrl: './mydrawings.component.html',
  styleUrl: './mydrawings.component.css'
})
export class MydrawingsComponent {
  drawings: Drawing[] = [
    {
      title: "Mi Dibujo",
      image: "assets/img/avatar/freddy.jpg",
    },{
      title: "Pinterest Drawing",
      image: "https://i.pinimg.com/564x/2e/e3/54/2ee3540590e3fb950f94990e381895b2.jpg",
    },{
      title: "Mi Dibujo",
      image: "assets/img/avatar/freddy.jpg",
    },{
      title: "Mi Dibujo",
      image: "assets/img/avatar/freddy.jpg",
    },{
      title: "Mi Dibujo",
      image: "assets/img/avatar/freddy.jpg",
    },{
      title: "Mi Dibujo",
      image: "assets/img/avatar/freddy.jpg",
    },{
      title: "Mi Dibujo",
      image: "assets/img/avatar/freddy.jpg",
    },
  ];
}
