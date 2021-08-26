import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import { Cita } from '../../model/cita';
import { CitaService } from '../../services/cita.service';


@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.css'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
})
export class EditarCitaComponent implements OnInit {
  cita: Cita;
  citaForm: FormGroup;
  minDate: Date;
  fechaFormateada: string;
  horario$ = this.citaService.horario;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private citaService: CitaService,
    public datepipe: DatePipe
  ) {
    const today = Date.now();
    this.minDate = new Date(today);
    
    const navigation = this.router.getCurrentNavigation();
    this.cita = navigation?.extras?.state?.value;
    this.initForm();
  }
  
  ngOnInit(): void {
    this.horario$;
    if (typeof this.cita === 'undefined') {
      this.router.navigate(['/citas/crear']);
    } else {
      this.citaForm.patchValue(this.cita);
    }
  }

  onSave(): void {
    if (this.citaForm.valid) {
      this.citaForm.value.DNI = this.cita.DNI
      this.citaForm.value.codigo = this.cita.codigo
      this.citaForm.value.especialidad = this.cita.especialidad
      this.citaForm.value.id = this.cita.id
      this.citaForm.value.lastname = this.cita.lastname
      this.citaForm.value.medico = this.cita.medico
      this.citaForm.value.name = this.cita.name
      this.fechaFormateada =this.datepipe.transform(this.citaForm.value.fecha, 'dd/MM/yyyy');
      this.citaForm.value.fecha = this.fechaFormateada;
      console.log(this.citaForm.value);

      const cita = this.citaForm.value;
      const citaId = this.cita?.id || null;
      console.log(cita);
        
      this.citaService.onSaveCita(cita, citaId);
      this.citaForm.reset();
      this.router.navigate(['/citas/registro-citas']);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['/citas/registro-citas']);
  }

  isValidField(field: string): string {
    const validatedField = this.citaForm.get(field);
    return !validatedField.valid && validatedField.touched
      ? 'is-invalid'
      : validatedField.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void {
    this.citaForm = this.fb.group({
      DNI: [
        { value: '', disabled: true },
        [Validators.required, Validators.pattern('[0-9]{8}')],
      ],
      name: [
        { value: '', disabled: true },
        [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')],
      ],
      lastname: [
        { value: '', disabled: true },
        [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')],
      ],
      fecha: [
        '',
        [
          Validators.required
        ],
      ],
      horario: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
        ],
      ],
      medico: [
        { value: '', disabled: true },
        [Validators.required, Validators.pattern('^[A-Za-z0-9- ]+$')],
      ],
    });
  }

  get dniNoValido() {
    return this.citaForm.get('DNI').invalid && this.citaForm.get('DNI').touched;
  }

  get nombreNoValido() {
    return (
      this.citaForm.get('name').invalid && this.citaForm.get('name').touched
    );
  }

  get apellidoNoValido() {
    return (
      this.citaForm.get('lastname').invalid &&
      this.citaForm.get('lastname').touched
    );
  }

  get fechaNoValido() {
    return (
      this.citaForm.get('fecha').invalid && this.citaForm.get('fecha').touched
    );
  }

  get horarioNoValido() {
    return (
      this.citaForm.get('horario').invalid &&
      this.citaForm.get('horario').touched
    );
  }

  get medicoNoValido() {
    return (
      this.citaForm.get('medico').invalid && this.citaForm.get('medico').touched
    );
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
