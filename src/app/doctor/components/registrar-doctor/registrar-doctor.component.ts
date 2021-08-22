import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Doctores } from '../../model/doctor';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-registrar-doctor',
  templateUrl: './registrar-doctor.component.html',
  styleUrls: ['./registrar-doctor.component.css']
})
export class RegistrarDoctorComponent implements OnInit {
  doctor:Doctores;
  especialidad$= this.doctorService.especialidad;
  doctorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private router: Router
  ) { 
    const navigation = this.router.getCurrentNavigation();
    this.doctor = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    this.initForm();
    this.especialidad$;
  }

  initForm() {
    this.doctorForm = this.fb.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
      telefono: ['', [Validators.required]]
    })
  }

  registrarDoctor(){

    if (this.doctorForm.valid) {
      const doctor = this.doctorForm.value;
      const doctorId = this.doctor?.codigo || null;
      this.doctorService.onSaveCitas(doctor, doctorId);
    }

    Swal.fire({
      icon: 'success',
      title: 'Doctor registrado',
      text: 'Se registro con éxito al doctor',
      confirmButtonText: "OK",
      confirmButtonColor: "#2FAF27"
    })
  }

  /* Validaciones */
  get nombreNoValido() {
    return (
      this.doctorForm.get('nombres').invalid &&
      this.doctorForm.get('nombres').touched
    );
  }

  get apellidoNoValido() {
    return (
      this.doctorForm.get('apellidos').invalid &&
      this.doctorForm.get('apellidos').touched
    );
  }

  get dniNoValido() {
    return (
      this.doctorForm.get('dni').invalid &&
      this.doctorForm.get('dni').touched
    );
  }

  get especialidadNoValido() {
    return (
      this.doctorForm.get('especialidad').invalid &&
      this.doctorForm.get('especialidad').touched
    );
  }

  get telefonoNoValido() {
    return (
      this.doctorForm.get('telefono').invalid &&
      this.doctorForm.get('telefono').touched
    );
  }

}
