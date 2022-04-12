import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-distribuidor',
  templateUrl: './create-distribuidor.component.html',
  styleUrls: ['./create-distribuidor.component.css']
})
export class CreateDistribuidorComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    console.log(`entro al componente del distribuidor nuevo`);
    
  }

}

