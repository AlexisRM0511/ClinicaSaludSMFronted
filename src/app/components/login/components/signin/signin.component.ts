import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersInterface } from 'src/app/models/users';
import { UserService } from 'src/app/services/users/user.service';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent {
  form: FormGroup;
  users: UsersInterface[]

  constructor(
    private _builder: FormBuilder,
    private router: Router,
    private loginSvc: LoginService,
    private userSvc: UserService
  ) {
    this.form = this._builder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    if (sessionStorage.getItem('userID')) {
      this.router.navigate(['/home']);
    }
  }

  async validar() {
    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Datos Inválidos',
        text: 'Usuario o contraseña Inválidos',
      });
    }
    else {
      await this.loginSvc.login(this.form.get('email').value, this.form.get('password').value)
        .then(() => {
          this.userSvc.getUser(sessionStorage.getItem("userID"))
            .subscribe(resUser => {
              sessionStorage.setItem("typeUser",resUser.type)
            })

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
              text: 'Usuario o contbebeberaseña Inválidos',
            });
          }

        })

    }
  }
}
