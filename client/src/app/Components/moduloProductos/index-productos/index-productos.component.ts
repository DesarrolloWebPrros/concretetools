import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Producto } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-index-productos',
  templateUrl: './index-productos.component.html',
  styleUrls: ['./index-productos.component.css']
})
export class IndexProductosComponent implements OnInit {

  Productos: Producto[]=[];
  modalCreate:boolean = false;

  constructor(private Rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos = () => {
    this.Rest.get(`http://localhost:3768/api/productos`).subscribe((respuesta:any) => {
      this.Productos = respuesta.Productos;
      console.log(`Productos =>>>`,respuesta);
    });
  }
  newProducto = ()=>{
    this.router.navigate(['create-producto']);
   
  }

  edit = (id:string) => {
    
    console.log(`Id a editar es: `,id);
    this.router.navigate(['edit-producto', id]);
    
  }

  delete = (id:string) => {
    console.log(`Id a eliminar es: `,id);
    
  }

}
