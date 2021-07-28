import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/firebase/pacientes.service';

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

  validar(values){
    let data
    console.log(values.codigo)
    this.pacientes$.subscribe( val => val.forEach(element => {
      if(element.codigo===values.codigo){
        sessionStorage.setItem("userID",values.codigo)
      }
    }))
    data=sessionStorage.getItem("userID")
    console.log(data)
    if(data!==null){
      alert("USTED SE HA LOGUEADO")
      this.router.navigate([''])
    }
    this.form.reset()
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
