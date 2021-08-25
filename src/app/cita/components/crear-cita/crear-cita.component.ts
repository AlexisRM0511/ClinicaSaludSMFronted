import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/paciente/model/paciente';
import { PacienteService } from 'src/app/paciente/services/paciente.service';
import Swal from 'sweetalert2';
import { Cita } from '../../model/cita';
import { CitaService } from '../../services/cita.service';
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

  constructor(
    private citasService: CitaService,
    private fb: FormBuilder,
    private router: Router,
    private pacienteService: PacienteService,
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
    this._adapter.setLocale('es');
  }

  initForm() {
    this.citaForm = this.fb.group({
      codigo: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
      medico: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      horario: ['', [Validators.required]],
    });

    if (sessionStorage.getItem('userID') !== null) {
      this.citaForm.get('codigo').disable();
      this.citaForm.get('codigo').setValue(sessionStorage.getItem('userID'));
    }
  }

  async crearCita() {
    this.paciente$ = await this.pacienteService.getOnePaciente(
      this.citaForm.get('codigo').value
    );
    console.log(this.citaForm.value);

    if (this.citaForm.valid) {
      const cita: Cita = this.citaForm.value;
      cita.codigo = this.citaForm.get('codigo').value;

      cita.fecha = this.citaForm.get('fecha').value.toLocaleDateString();
      const citaId = this.cita?.id || null;
      await this.paciente$.subscribe(async (x) => {
        if (x !== undefined) {
          cita.name = x?.name;
          cita.lastname = x?.lastName;
          cita.DNI = x?.dni;
          this.citasService.onSaveCitas(cita, citaId);
          Swal.fire({
            icon: 'success',
            title: 'Cita generada',
            text: 'La cita de a generado con éxito',
            confirmButtonText: 'OK',
            confirmButtonColor: '#2FAF27',
          });

          this.citaForm.reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ccodigo de asegurado incorrecto',
          });
        }
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
