import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Promocion } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-index-promociones',
  templateUrl: './index-promociones.component.html',
  styleUrls: ['./index-promociones.component.css']
})
export class IndexPromocionesComponent implements OnInit {

  Promociones: Promocion[]=[];
  modalCreate:boolean = false;

  constructor(private Rest: RestService, private router: Router) { }

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
    this.router.navigate(['create-promocion']);
    
  }

  edit = (id:string) => {
    console.log(`Id a editar es: `,id);
    this.router.navigate(['edit-promocion', id]);
    
  }

  delete = (id:string) => {
    console.log(`Id a eliminar es: `,id);
    
  }

}