import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/firebase/pacientes.service';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-atencion-general',
  templateUrl: './atencion-general.component.html',
  styleUrls: ['./atencion-general.component.css']
})
export class AtencionGeneralComponent{
  form: FormGroup;
  codigo: string;
  pacientes$ = this.pacienteSvc.paciente;
  
  constructor(private _builder :FormBuilder,private pacienteSvc: PacientesService,private router:Router) {
    this.form=this._builder.group({
      codigo:['',Validators.required]
    })
  }

  async validar(values){
    console.log(values.codigo)
    this.pacientes$.subscribe(val => {
      val.forEach(element => {
        if (element.codigo === values.codigo) {
          sessionStorage.setItem("userID", values.codigo);
          alert("USTED SE HA LOGUEADO");
          this.router.navigate(['paciente']);
        }
      });
      if (sessionStorage.getItem("userID") === null) {
        alert("ERROR");
      }
    }
    )
    
  }
}
  //   form: FormGroup;

//   constructor() {
//     this.buildForm();
//   }

//   ngOnInit() {
//   }

//   private buildForm() {
//     this.form = new FormGroup({
//       codigo: new FormControl('', [Validators.required]),
//     });

//     this.form.valueChanges
//     .subscribe(value => {
//       console.log(value);
//     });
//   }

  
// }
