import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/firebase/pacientes.service';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.css']
})
export class AdministrativoComponent{
  form: FormGroup;
  codigo: string;
  password: string;
  pacientes$ = this.pacienteSvc.paciente;
  
  constructor(private _builder :FormBuilder,private pacienteSvc: PacientesService,private router:Router) {
    this.form=this._builder.group({
      codigo:['',Validators.required],
      password:['',Validators.required]
    })
  }

  async validar(values){
    console.log(values.codigo,values.password)
    this.pacientes$.subscribe(val => {
      val.forEach(element => {
        if (element.codigo === values.codigo) {
          sessionStorage.setItem("adminID", values.codigo);
          alert("USTED SE HA LOGUEADO");
          this.router.navigate(['admin']);
        }
      });
      if (sessionStorage.getItem("adminID") === null) {
        alert("ERROR");
      }
    }
    )
    
  }
}
