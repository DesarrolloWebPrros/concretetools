import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  Promociones: any;

  constructor(private Rest: RestService) { }

  ngOnInit(): void {
    this.getPromociones();
  }

  getPromociones = () => {
    this.Rest.get(`http://localhost:3768/api/promociones`).subscribe((respuesta:any) => {
      this.Promociones = respuesta.Promociones;
      console.log(`Promociones =>>>`,respuesta);
    });
    
  }

}

