import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';
import { Distribuidor } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-edit-distribuidor',
  templateUrl: './edit-distribuidor.component.html',
  styleUrls: ['./edit-distribuidor.component.css']
})
export class EditDistribuidorComponent implements OnInit {

  Distribuidor:any;
  DistribuidorObservable: Observable<any>= new Observable;
  showPhoto:boolean=true;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private Rest: RestService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      const url:string = 'http://localhost:3768/api/distribuidor/'+params["id"];
      console.log(url);

      this.DistribuidorObservable = this.Rest.get(url);
      this.DistribuidorObservable.subscribe( element =>{
        console.log(element);
        
        this.Distribuidor=element.Distribuidor;
      });
    });
  }

  eliminarFoto = () => {
    this.showPhoto = !this.showPhoto;
  }

}
