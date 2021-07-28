import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctoresService } from 'src/app/firebase/doctores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.css']
})
export class AdministrativoComponent {
  form: FormGroup;
  codigo: string;
  password: string;
  doctores$ = this.doctoresSvc.doctores;

  constructor(private _builder: FormBuilder, private doctoresSvc: DoctoresService, private router: Router) {
    this.form = this._builder.group({
      codigo: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async validar(values) {
    console.log(values.codigo, values.password)
    this.doctores$.subscribe(val => {
      val.forEach(element => {
        if (element.codigo === values.codigo && element.dni === values.password) {
          sessionStorage.setItem("adminID", values.codigo);
          this.Toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
          });
          this.router.navigate(['admin']);
        }
      });
      if (sessionStorage.getItem("adminID") === null) {
        this.Toast.fire({
          icon: 'error',
          title: 'Signed Error',
        });
      }
    }
    )
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
