import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/doctor/services/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent {
  form: FormGroup;
  codigo: string;
  password: string;
  doctores$ = this.doctoresSvc.doctor;
  Doctor = false;

  constructor(
    private _builder: FormBuilder,
    private doctoresSvc: DoctorService,
    private router: Router
  ) {
    this.form = this._builder.group({
      codigo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async validar(values) {
    console.log(values.codigo, values.password);
    this.doctores$.subscribe((val) => {
      val.forEach((element) => {
        if (
          element.codigo === values.codigo &&
          element.dni === values.password
        ) {
          sessionStorage.setItem('doctorID', values.codigo);
          this.Toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
          });

          this.router.navigate(['doctor']).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 1400);
          });
        }
      });
      if (sessionStorage.getItem('doctorID') === null) {
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
