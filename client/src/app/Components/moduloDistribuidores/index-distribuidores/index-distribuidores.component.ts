import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Distribuidor } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-index-distribuidores',
  templateUrl: './index-distribuidores.component.html',
  styleUrls: ['./index-distribuidores.component.css']
})
export class IndexDistribuidoresComponent implements OnInit {

  Distribuidores: Distribuidor[]=[];
  modalCreate:boolean = false;
  openModalDeleteBool:boolean = false;
  distribuidorToDelete:any;

  constructor(private Rest: RestService, private router: Router) { }

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
    this.router.navigate(['create-distribuidor']);

  }

  edit = (id:string) => {
    console.log(`Id a editar es: `,id);
    this.router.navigate(['edit-distribuidor', id]);

  }

  delete = (id:string) => {
    this.distribuidorToDelete = this.Distribuidores.find(P=>P._id === id);
    console.log(`Id a eliminar es: `,this.distribuidorToDelete);
    this.openModalDelete();
  }
  openModalDelete = () =>{
    this.openModalDeleteBool = !this.openModalDeleteBool;
  }

}
