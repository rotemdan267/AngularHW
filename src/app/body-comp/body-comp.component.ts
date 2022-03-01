import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-comp',
  templateUrl: './body-comp.component.html',
  styleUrls: ['./body-comp.component.css']
})
export class BodyCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lorem:string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur mollitia quis nobis, cupiditate,
  similique dignissimos amet quaerat, sapiente rerum voluptates? Non deserunt vel amet eum repellendus dignissimos
  consequatur repudiandae?`;

}


