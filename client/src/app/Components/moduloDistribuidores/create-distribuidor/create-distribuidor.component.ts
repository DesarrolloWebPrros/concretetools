import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Distribuidor } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-create-distribuidor',
  templateUrl: './create-distribuidor.component.html',
  styleUrls: ['./create-distribuidor.component.css']
})
export class CreateDistribuidorComponent implements OnInit {


    Distribuidor:Distribuidor={
      Nombre: '',
      Clave: '',
      Direccion: '',
      Telefono: '',
      email: '',
      Imagen:'',
      Region:''
    };
    imageSrc: string='';

    myForm = new FormGroup({

      Nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      Clave: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Direccion: new FormControl('', [Validators.required]),
      Telefono: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      Region: new FormControl('', [Validators.required]),

      file: new FormControl('', [Validators.required]),

      fileSource: new FormControl('', [Validators.required])

    });

    constructor(private Rest: RestService) { }

    get f(){

      return this.myForm.controls;

    }

    ngOnInit(): void {}

    submit(){
      console.log(this.myForm.value);
      this.Rest.post('http://localhost:3768/api/distribuidor', this.myForm.value)

        .subscribe(res => {

        console.log(res);

        alert('Uploaded Successfully.');

        })
    }

    guardar = (form : NgForm) => {
      console.log(`Distribuidor a enviar: `, form);

      // validar campos

      // enviar peticion a API

      // validar respuesta (Redireccionas o marcas error en form)
    }

    onFileChange(event:any) {

      const reader = new FileReader();


      if(event.target.files && event.target.files.length) {

        const [file] = event.target.files;

        reader.readAsDataURL(file);



        reader.onload = () => {

          this.imageSrc = reader.result as string;


          this.myForm.patchValue({

            fileSource: reader.result

          });

        };



      }

    }



}

