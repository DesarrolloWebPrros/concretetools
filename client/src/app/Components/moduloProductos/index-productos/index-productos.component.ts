import { Component, OnInit } from '@angular/core';
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

  openModalCreate = () => {
    this.modalCreate = !this.modalCreate;
  }
  newProducto = ()=>{
    this.openModalCreate();
    console.log(`abrio`, this.modalCreate);
    
  }

  edit = (id:string) => {
    console.log(`Id a editar es: `,id);
    
  }

  delete = (id:string) => {
    console.log(`Id a eliminar es: `,id);
    
  }

}
