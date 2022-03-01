import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-comp',
  templateUrl: './title-comp.component.html',
  styleUrls: ['./title-comp.component.css']
})
export class TitleCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  getHeadLine() {
    return "I'm a head-line";
  }

}
