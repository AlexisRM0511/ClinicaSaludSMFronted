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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private citaService: CitaService
  ) {
    const today = Date.now();
    this.minDate = new Date(today);
    const navigation = this.router.getCurrentNavigation();
    this.cita = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.cita === 'undefined') {
      this.router.navigate(['/citas/crear']);
    } else {
      this.citaForm.patchValue(this.cita);
    }
  }

  onSave(): void {
    if (this.citaForm.valid) {
      const cita = this.citaForm.value;
      const citaId = this.cita?.id || null;
      this.citaService.onSaveCita(cita, citaId);
      this.citaForm.reset();
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
      DNI: [{ value: '', disabled: true }, [Validators.required]],
      name: [{ value: '', disabled: true }, [Validators.required]],
      lastname: [{ value: '', disabled: true }, [Validators.required]],
      fecha: ['', [Validators.required]],
      horario: ['', [Validators.required]],
      codigo: [{ value: '', disabled: true }, [Validators.required]],
    });
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
