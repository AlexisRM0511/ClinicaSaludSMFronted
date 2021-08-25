import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.css'],
})
export class AdministrativoComponent {
  form: FormGroup;
  codigo: string;
  admin$ = this.adminSvc.admin;

  constructor(
    private _builder: FormBuilder,
    private adminSvc: AdminService,
    private router: Router
  ) {
    this.form = this._builder.group({
      codigo: ['', Validators.required],
    });
  }

  async validar(values) {
    this.admin$.subscribe((val) => {
      val.forEach((element) => {
        if (element.codigo === values.codigo) {
          sessionStorage.setItem('adminID', values.codigo);
          this.Toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
          });

          this.router.navigate(['admin']).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 1400);
          });
        }
      });
      if (sessionStorage.getItem('adminID') === null) {
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
