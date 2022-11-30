import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retospareja',
  templateUrl: './retospareja.page.html',
  styleUrls: ['./retospareja.page.scss'],
})
export class RetosparejaPage implements OnInit {

  randomNumber = 0;
  constructor() { }

  genRandom(){
    this.randomNumber = Math.floor(Math.random() * 5);
   }
  ngOnInit() {
  }

}
