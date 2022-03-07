import { Component, OnInit } from '@angular/core';
import type { Singer } from '../interfaces/Singer';

@Component({
  selector: 'app-singer-comp',
  templateUrl: './singer-comp.component.html',
  styleUrls: ['./singer-comp.component.css']
})
export class SingerCompComponent implements OnInit {

  singer: Singer = {
    firstName: 'Hanan',
    lastName: 'Ben Ari',
    age: 33,
    songs: [
      'Amen al hayeladim',
      'Shemesh',
      'Aluf haolam',
      'Ima im haity',
      'Wikipedia'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/%D7%97%D7%A0%D7%9F_%D7%91%D7%9F_%D7%90%D7%A8%D7%99_%D7%AA%D7%9E%D7%A8_%D7%97%D7%A0%D7%9F_%D7%9E%D7%A0%D7%95%D7%A8%D7%94_30.12.jpg/1280px-%D7%97%D7%A0%D7%9F_%D7%91%D7%9F_%D7%90%D7%A8%D7%99_%D7%AA%D7%9E%D7%A8_%D7%97%D7%A0%D7%9F_%D7%9E%D7%A0%D7%95%D7%A8%D7%94_30.12.jpg'
  }
  constructor() { }

  ngOnInit(): void {
  }

  GetNumberOfAlbums(){
    return 2;
  }
}
