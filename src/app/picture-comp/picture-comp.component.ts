import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-picture-comp',
  templateUrl: './picture-comp.component.html',
  styleUrls: ['./picture-comp.component.css']
})
export class PictureCompComponent implements OnInit {

  constructor() { }

  picturePath:string = "https://i0.wp.com/www.thewebdesigncompany.eu/wp-content/uploads/2020/04/WHAT-IS-lorem-ipsum.jpg?fit=960%2C720&ssl=1";
  ngOnInit(): void {
  }

}