import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  citaForm: FormGroup;

  constructor(
    private citasService: CitaService,
    private fb: FormBuilder,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.cita = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    this.especialidad$;
    this.medico$;
    this.horario$;
    this.initForm();
  }

  initForm() {
    this.citaForm = this.fb.group({
      especialidad: ['', [Validators.required]],
      medico: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      horario: ['', [Validators.required]],
    });
  }

  crearCita() {
    console.log('saved', this.citaForm.value);

    if (this.citaForm.valid) {
      const cita = this.citaForm.value;
      const citaId = this.cita?.id || null;
      this.citasService.onSaveCitas(cita, citaId);
    }
    Swal.fire({
      icon: 'success',
      title: 'Cita generada',
      text: 'La cita de a generado con éxito',
      confirmButtonText: 'OK',
      confirmButtonColor: '#2FAF27',
    });
  }
}
