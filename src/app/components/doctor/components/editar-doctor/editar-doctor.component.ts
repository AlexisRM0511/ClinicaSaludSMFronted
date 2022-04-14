import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Doctores } from '../../model/doctor';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-editar-doctor',
  templateUrl: './editar-doctor.component.html',
  styleUrls: ['./editar-doctor.component.css'],
})
export class EditarDoctorComponent implements OnInit {
  doctor: Doctores;
  doctorForm: FormGroup;

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private doctorService: DoctorService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.doctor = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    this.initForm();
    if (typeof this.doctor === 'undefined') {
      this.router.navigate(['/doctor/registrar']);
    } else {
      this.doctorForm.patchValue(this.doctor);
    }
  }

  private initForm(): void {
    this.doctorForm = this.fb.group({
      codigo: [
        '',
        [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
      ],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      number: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]'),
          Validators.minLength(7),
          Validators.maxLength(9),
        ],
      ],
      dni: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      specialty: ['', [Validators.required]],
    });
  }

  isValidField(field: string): string {
    const validatedField = this.doctorForm.get(field);
    return !validatedField.valid && validatedField.touched
      ? 'is-invalid'
      : validatedField.touched
      ? 'is-valid'
      : '';
  }

  onSave(): void {
    if (this.doctorForm.valid) {
      const doctor = this.doctorForm.value;
      const doctorId = this.doctor?.id || null;
      this.doctorService.onSaveCitas(doctor, doctorId);
      this.doctorForm.reset();
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['/doctor/registrados']);
  }

  get dniNoValido() {
    return (
      this.doctorForm.get('dni').invalid && this.doctorForm.get('dni').touched
    );
  }

  get nombreNoValido() {
    return (
      this.doctorForm.get('name').invalid && this.doctorForm.get('name').touched
    );
  }

  get apellidoNoValido() {
    return (
      this.doctorForm.get('lastname').invalid &&
      this.doctorForm.get('lastname').touched
    );
  }

  get fechaNoValido() {
    return (
      this.doctorForm.get('fecha').invalid &&
      this.doctorForm.get('fecha').touched
    );
  }

  get horarioNoValido() {
    return (
      this.doctorForm.get('horario').invalid &&
      this.doctorForm.get('horario').touched
    );
  }

  get codigoNoValido() {
    return (
      this.doctorForm.get('codigo').invalid &&
      this.doctorForm.get('codigo').touched
    );
  }
  get telefonoNoValido() {
    return (
      this.doctorForm.get('number').invalid &&
      this.doctorForm.get('number').touched
    );
  }
  get especialidadNoValido() {
    return (
      this.doctorForm.get('specialty').invalid &&
      this.doctorForm.get('specialty').touched
    );
  }
}
