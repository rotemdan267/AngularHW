import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-meter',
  templateUrl: './temp-meter.component.html',
  styleUrls: ['./temp-meter.component.css']
})
export class TempMeterComponent implements OnInit {

  tempDesc: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  tempDescription(temp: string): void {

    let num: number = parseInt(temp);

    if (num <= 20) {
      this.tempDesc = 'The weather is quite cool';
    } 
    else if (num >= 30) {
      this.tempDesc = 'The weather is very warm';
    }
    else {
      this.tempDesc = 'The weather is nice and comfortable';
    }
    
  }

}
