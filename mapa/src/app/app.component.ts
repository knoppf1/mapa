import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mapa';
  texto : string = 'Casa Fabiano';
  lat: number = -26.72730;
  lng: number = -48.68530;
  zoom: number = 15;
}
