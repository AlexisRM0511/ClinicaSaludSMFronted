import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  form: FormGroup;
  login$ = this.loginSvc;

  constructor(
    private _builder: FormBuilder,
    private loginSvc: LoginService,
    private router: Router
  ) {
    this.form = this._builder.group({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      code: new FormControl('', [Validators.required, Validators.min(10000000), Validators.max(99999999)]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordTwo: new FormControl('', [Validators.required]),
    });

    if (sessionStorage.getItem('userID')) {
      this.router.navigate(['/home']);
    }
  }

  async validar() {
    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Formulario inválido',
        text: 'Revise los campos e intente nuevamente',
      });
    } else {
      await this.login$.registerUser(this.form.get('email').value+"@unmsm.edu.pe",this.form.get('password').value,  this.form.get('name').value, this.form.get('lastname').value, this.form.get('code').value)
      if (sessionStorage.getItem('userID')) {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de Sesion Exitoso',
        });
        this.router.navigate(['/home']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Datos Inválidos',
          text: 'Usuario o contraseña Inválidos',
        });
      }
    }
  }

}
