import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mapa';
  texto : string = 'Conselheiros CONSEG';
  lat: number = -26.72730;
  lng: number = -48.68530;
  zoom: number = 15;

  markers: any[] = [];
  //  infoWindowOpened: any = null
  //  previous_info_window: any = null

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.appService.listar().subscribe((res)=>{
      console.log('Resultado', res);
      this.markers = [];
      console.log('array marker', this.markers);

      //Adiciona a localização no Mapa
      res.forEach((item: { nome: any; telefone: any; endereco: any; email: any; lat: any; lng: any; corHexa: { toString: () => any; }; }) => {
        //Atribui valores a Array
        var dado: any = {

          cliente: item.nome,
          telefone: item.telefone,
          endereco: item.endereco,
          email: item.email,
          lat: item.lat,
          lng: item.lng,
          label: '',
          draggable: false,
          icon: { 'path': 'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z', 'fillColor': item.corHexa.toString(), 'fillOpacity': 1, 'scale': 2 }
        }
        this.markers.push(dado);
      });
      console.log('array marker 1', this.markers);
  });
  }
}
