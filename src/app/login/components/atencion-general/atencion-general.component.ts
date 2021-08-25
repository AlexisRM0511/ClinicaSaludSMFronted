import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/paciente/services/paciente.service';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-atencion-general',
  templateUrl: './atencion-general.component.html',
  styleUrls: ['./atencion-general.component.css'],
})
export class AtencionGeneralComponent {
  form: FormGroup;
  codigo: string;
  pacientes$ = this.pacienteSvc.paciente;

  constructor(
    private _builder: FormBuilder,
    private pacienteSvc: PacienteService,
    private router: Router
  ) {
    this.form = this._builder.group({
      codigo: ['', Validators.required],
    });
  }

  async validar(values) {
    this.pacientes$.subscribe((val) => {
      val.forEach((element) => {
        if (element.codigo === values.codigo) {
          sessionStorage.setItem('userID', values.codigo);
          this.Toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
          });

          this.router.navigate(['paciente']).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 1400);
          });
        }
      });
      if (sessionStorage.getItem('userID') === null) {
        this.Toast.fire({
          icon: 'error',
          title: 'Signed Error',
        });
      }
    });
  }

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
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
