import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/firebase/paciente';
import { PacientesService } from 'src/app/firebase/pacientes.service';
import Swal from 'sweetalert2';
import { Cita } from '../../model/cita';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css'],
})
export class CrearCitaComponent implements OnInit {
  cita: Cita;
  especialidad$ = this.citasService.especialidad;
  medico$ = this.citasService.medico;
  horario$ = this.citasService.horario;
  paciente$: Observable<Paciente>;
  /* paciente: Paciente; */

  citaForm: FormGroup;

  constructor(
    private citasService: CitaService,
    private fb: FormBuilder,
    private router: Router,
    private pacienteService: PacientesService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.cita = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    this.especialidad$;
    this.medico$;
    this.horario$;
    this.initForm();
    console.log(this.medico$);
  }

  initForm() {
    this.citaForm = this.fb.group({
      codigo: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
      medico: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      horario: ['', [Validators.required]],
    });
  }

  async crearCita() {
    this.paciente$ = await this.pacienteService.getOnePaciente(
      this.citaForm.get('codigo').value
    );

    if (this.citaForm.valid) {
      const cita: Cita = this.citaForm.value;
      const citaId = this.cita?.id || null;
      await this.paciente$.subscribe(async (x) => {
        console.log(x);
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
}
