import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweet-cake',
  templateUrl: './sweet-cake.component.html',
  styleUrls: ['./sweet-cake.component.css']
})
export class SweetCakeComponent implements OnInit {

  cake: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  getFormValues(formValue: any) {

    if (formValue.cakeTags != '') {
      formValue.cakeTags = formValue.cakeTags.split(",");
    }
    else {
      formValue.cakeTags = [];
    }
    
    this.cake = formValue;


    console.log(this.cake);

  }
}
