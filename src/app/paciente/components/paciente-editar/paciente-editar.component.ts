import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from '../../model/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-paciente-editar',
  templateUrl: './paciente-editar.component.html',
  styleUrls: ['./paciente-editar.component.css'],
})
export class PacienteEditarComponent implements OnInit {
  paciente: Paciente;
  pacienteForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private pacienteService: PacienteService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.paciente = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.paciente === 'undefined') {
      this.router.navigate(['/paciente/registrar']);
    } else {
      this.pacienteForm.patchValue(this.paciente);
    }
  }

  onSave(): void {
    if (this.pacienteForm.valid) {
      const paciente = this.pacienteForm.value;
      const pacienteId = this.paciente?.codigo || null;
      console.log(paciente);
      
      this.pacienteService.onSavePacientes(paciente, pacienteId);
      this.pacienteForm.reset();
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['/paciente/registrado']);
  }

  isValidField(field: string): string {
    const validatedField = this.pacienteForm.get(field);
    return !validatedField.valid && validatedField.touched
      ? 'is-invalid'
      : validatedField.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void {
    this.pacienteForm = this.fb.group({
      codigo: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      date: ['', [Validators.required]],
      number: ['', [Validators.required]],
    });
  }
}
