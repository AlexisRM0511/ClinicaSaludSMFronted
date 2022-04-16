import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersInterface } from 'src/app/models/users';
import { UserService } from 'src/app/services/users/user.service';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  form: FormGroup;

  constructor(
    private _builder: FormBuilder,
    private router: Router,
    private loginSvc: LoginService,
    private userSvc: UserService
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
        text: 'Revise los campos e intente nuevamente'
      });
    } else {
      await this.loginSvc.registerUser(this.form.get('email').value + "@unmsm.edu.pe", this.form.get('password').value)
        .then(async () => {
          const data: UsersInterface = {
            id: sessionStorage.getItem('userID'),
            name: this.form.get('name').value,
            lastname: this.form.get('lastname').value,
            code: this.form.get('code').value,
            email: this.form.get('email').value+"@unmsm.edu.pe",
            password: this.form.get('password').value,
            type: "1",
            status: "1"
          }
          await this.userSvc.onSaveUser(data)
            .then(() => {
              sessionStorage.setItem("typeUser", "1")
              Swal.fire({
                icon: 'success',
                title: 'Registro Exitoso',
              }).then(() => {
                this.router.navigate(['/home'])
                window.location.reload()
              })
            }).catch(() => {
              Swal.fire({
                icon: 'error',
                title: 'Error al registrar',
                text: 'Intente nuevamente',
              })
            })
        }).catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Error en Registro',
            text: 'El correo ya se encuentra registrado',
          });
        })
    }
  }

}
