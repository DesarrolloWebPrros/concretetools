import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-promocion',
  templateUrl: './create-promocion.component.html',
  styleUrls: ['./create-promocion.component.css']
})
export class CreatePromocionComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    console.log(`entro al componente de la promoción nueva`);
    
  }

}
