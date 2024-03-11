import {Component, OnInit} from '@angular/core';
import {Drawing} from "../../interfaces/drawing";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detaildrawing',
  templateUrl: './detaildrawing.component.html',
  styleUrl: './detaildrawing.component.css'
})
export class DetaildrawingComponent implements OnInit {

  drawing: Drawing = {
    id: 0,
    title: "",
    image: "",
  };

  id: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    fetch(`http://127.0.0.1:8081/drawings/${this.id}`).then(response => {
      return response.json()
    }).then(data => {
      console.log(data)
      this.drawing = data;
    })
  }
}
