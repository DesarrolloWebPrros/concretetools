import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  Productos: any;

  constructor(private Rest: RestService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos = () => {
    this.Rest.get(`http://localhost:3768/api/productos`).subscribe((respuesta:any) => {
      this.Productos = respuesta.Productos;
      console.log(`Productos =>>>`,respuesta);
    });
    
  }

}
