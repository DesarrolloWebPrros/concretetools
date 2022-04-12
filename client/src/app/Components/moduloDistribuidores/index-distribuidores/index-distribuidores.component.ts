import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Distribuidor } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-index-distribuidor',
  templateUrl: './index-distribuidor.component.html',
  styleUrls: ['./index-distribuidor.component.css']
})
export class IndexDistribuidorComponent implements OnInit {

  Distribuidores: Distribuidor[]=[];
  modalCreate:boolean = false;

  constructor(private Rest: RestService) { }

  ngOnInit(): void {
    this.getDistribuidores();
  }

  getDistribuidores = () => {
    this.Rest.get(`http://localhost:3768/api/distribuidores`).subscribe((respuesta:any) => {
      this.Distribuidores = respuesta.Distribuidores;
      console.log(`Distribuidores =>>>`,respuesta);
    });
  }

  openModalCreate = () => {
    this.modalCreate = !this.modalCreate;
  }
  newDistribuidor = ()=>{
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
