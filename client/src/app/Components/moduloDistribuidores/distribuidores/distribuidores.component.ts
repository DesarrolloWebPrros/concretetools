import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-distribuidores',
  templateUrl: './distribuidores.component.html',
  styleUrls: ['./distribuidores.component.css']
})
export class DistribuidoresComponent implements OnInit {
  Distribuidores: any;

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

}
