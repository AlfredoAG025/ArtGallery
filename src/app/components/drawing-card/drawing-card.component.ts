import {Component, Input} from '@angular/core';
import {Drawing} from "../../interfaces/drawing";

@Component({
  selector: 'app-drawing-card',
  templateUrl: './drawing-card.component.html',
  styleUrl: './drawing-card.component.css'
})
export class DrawingCardComponent {
  @Input() drawing: Drawing = {
    title: '',
    image: '',
  }
}
