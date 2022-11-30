import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retospeda',
  templateUrl: './retospeda.page.html',
  styleUrls: ['./retospeda.page.scss'],
})
export class RetospedaPage implements OnInit {
 
  randomNumber = 0;
  constructor() {
    
   }
  genRandom(){
   this.randomNumber = Math.floor(Math.random() * 5);
  }
  ngOnInit() {
  }

}
