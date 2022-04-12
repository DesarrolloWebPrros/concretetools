import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Promociones } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-index-promociones',
  templateUrl: './index-promociones.component.html',
  styleUrls: ['./index-promociones.component.css']
})
export class IndexPromocionesComponent implements OnInit {

  Promociones: Promocion[]=[];
  modalCreate:boolean = false;

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

  openModalCreate = () => {
    this.modalCreate = !this.modalCreate;
  }
  newPromocion = ()=>{
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