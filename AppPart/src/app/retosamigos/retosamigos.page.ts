import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retosamigos',
  templateUrl: './retosamigos.page.html',
  styleUrls: ['./retosamigos.page.scss'],
})
export class RetosamigosPage implements OnInit {
  
  randomNumber = 0;

  constructor() { }

  genRandom(){
    this.randomNumber = Math.floor(Math.random() * 5);
 
    }
  ngOnInit() {
  }

}
