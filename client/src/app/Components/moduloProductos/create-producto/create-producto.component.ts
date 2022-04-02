import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    console.log(`entro al componente del producto nuevo`);
    
  }

}
