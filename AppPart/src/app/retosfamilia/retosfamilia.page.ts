import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['./retosfamilia.page.scss'],
})


export class RetosfamiliaPage implements OnInit {

  randomNumber = 0; 
  s
  constructor() {}

   
  genRandom(){
   this.randomNumber = Math.floor(Math.random() * 5);
   }

  ngOnInit() {

  }
}
