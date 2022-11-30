import { Component, OnInit } from '@angular/core';
import { HttpService } from '../inicio/services/http.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit{
  public pokemons: any[]=[]

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(){
    this.getPokemons()
  }

  getPokemons() {
    this.httpService.getPokemons().subscribe((data:any)=> this.pokemons = data.results)
  }

}
