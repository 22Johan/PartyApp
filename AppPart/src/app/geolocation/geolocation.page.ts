import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../inicio/places.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  constructor( private PlacesService : PlacesService) { }

  ngOnInit() {
  }

}
