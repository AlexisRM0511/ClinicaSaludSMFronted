import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/paciente/model/paciente';
import { PacienteService } from 'src/app/paciente/services/paciente.service';
import Swal from 'sweetalert2';
import { Cita } from '../../model/cita';
import { CitaService } from '../../services/cita.service';
import { Asegurado } from '../../model/asegurado';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
})
export class CrearCitaComponent implements OnInit {
  cita: Cita;
  especialidad$ = this.citasService.especialidad;
  medico$ = this.citasService.medico;
  horario$ = this.citasService.horario;
  paciente$: Observable<Paciente>;
  /* paciente: Paciente; */
  minDate: Date;

  citaForm: FormGroup;
  aseguradoIngresado: any;
  existeCodigo: any;

  asegurados$ = this.aseguradoService.asegurado;
  asegurados: Asegurado[];
  arrayAsegurados: string[] = [];
  elementoAsegurado: string;
  indefinido: boolean;

  constructor(
    private citasService: CitaService,
    private fb: FormBuilder,
    private router: Router,
    private pacienteService: PacienteService,
    private aseguradoService: CitaService,
    private _adapter: DateAdapter<any>
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.cita = navigation?.extras?.state?.value;
    const today = Date.now();
    this.minDate = new Date(today);
  }

  ngOnInit(): void {
    this.especialidad$;
    this.medico$;
    this.horario$;
    this.initForm();
    this.listarAsegurado();
    this._adapter.setLocale('es');
  }

  listarAsegurado() {
    this.asegurados$.subscribe((val) => {
      this.asegurados = val;

      for (let i = 0; i < this.asegurados.length; i++) {
        this.arrayAsegurados.push(this.asegurados[i].codigo);
      }
    });
  }

  get codigoNoValido() {
    if (this.existeCodigo === undefined) {
      return false;
    } else {
      if (this.existeCodigo && this.citaForm.get('codigo').touched) {
        return this.citaForm.get('codigo').invalid;
      } else {
        return true;
      }
    }
  }

  onSearchChange(searchValue: string): void {
    this.aseguradoIngresado = searchValue;
    this.existeCodigo = this.arrayAsegurados.includes(this.aseguradoIngresado);
  }

  initForm() {
    this.citaForm = this.fb.group({
      codigo: ['', [Validators.required]],
      especialidad: [0, [Validators.required]],
      medico: [0, [Validators.required]],
      fecha: ['', [Validators.required]],
      horario: ['', [Validators.required]],
    });

    if (sessionStorage.getItem('userID') !== null) {
      this.citaForm.get('codigo').disable();
      this.citaForm.get('codigo').setValue(sessionStorage.getItem('userID'));
    }
  }

  crearCita() {
    this.paciente$ = this.pacienteService.getOnePaciente(
      this.citaForm.get('codigo').value
    );

    if (this.citaForm.valid) {
      const cita: Cita = this.citaForm.value;
      cita.codigo = this.citaForm.get('codigo').value;

      cita.fecha = this.citaForm.get('fecha').value.toLocaleDateString();
      const citaId = this.cita?.id || null;
      console.log(this.paciente$);

      let validar = true;
      this.paciente$.subscribe((x) => {
        console.log(x);

        if (x !== undefined && validar) {
          validar = false;
          cita.name = x?.name;
          cita.lastname = x?.lastName;
          cita.DNI = x?.dni;
          this.citasService
            .onSaveCitas(cita, citaId)
            .then((x) => {
              console.log(x);

              Swal.fire({
                icon: 'success',
                title: 'Cita generada',
                text: 'La cita de a generado con éxito',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2FAF27',
              });
            })
            .then((res) => {
              this.citaForm.reset();
            });
        } /* else {
          Swal.fire({
            icon: 'error',
            title: 'Código de asegurado incorrecto',
          });
        } */
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
      });
    }
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
