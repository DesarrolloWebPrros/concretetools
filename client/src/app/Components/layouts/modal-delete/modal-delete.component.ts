import { Component, Input, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {
  @Input() objToDelete:any;
  @Input() openDeleteModal:any;
  @Input() updateAll:any;

  response:any;
  error = false;
  mensajes:string[] = [];
  toast = false;
  objeto: any;

  constructor(private Rest: RestService) { }

  ngOnInit(): void {
    this.objeto = this.objToDelete;
    console.log(this.objeto);    
  }
  closeAdvice = ( e:any ) => {
    this.openDeleteModal(e);
  }
  submit  = async( e:any ) => {
    this.toast = true;
    (await this.Rest.del('http://localhost:3768/api/producto/'+this.objToDelete._id ))
    .subscribe( (result:any) => {
      console.log(`Result: `, result);
      
      this.response = result;
      this.mensajes = result.message;

      if (this.response.Error) {
        this.error = true;
      } else {
        //this.partida = this.response.Registro;
        this.error = false;
        this.updateAll();

        setTimeout(() => {
          this.closeAdvice(e);
          this.toast =false;
        }, 5000);
      }
    });
  }

}
