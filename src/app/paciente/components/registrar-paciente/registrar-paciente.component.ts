import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Paciente } from '../../model/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit {

  paciente: Paciente;
  pacienteForm: FormGroup;
  estadoPaciente: string;

  constructor(private router: Router,
    private fb: FormBuilder,
    private pacienteService: PacienteService) { 

  }

  ngOnInit(): void {
    this.initForm();
  }
  onSave(): void{
    /* this.pacienteForm.get('id').setValue( this.pacienteForm.get('codigo').value); */

    if (this.pacienteForm.valid){
      const emergencia = this.pacienteForm.value;
      const emergenciaId = this.paciente?.id || null;
      this.pacienteService.onSavePacientes(emergencia,emergenciaId)
      Swal.fire({
        title: 'Paciente registrado',
        icon: 'success',  
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/paciente/registrado']);
        }
      });
    }
  }

  private initForm(): void {
    this.pacienteForm = this.fb.group({
      codigo: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      number: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
  }

  /* Validaciones */
  get nombreNoValido() {
    return (
      this.pacienteForm.get('name').invalid &&
      this.pacienteForm.get('name').touched
    );
  }
  get apellidosNoValido() {
    return (
      this.pacienteForm.get('lastName').invalid &&
      this.pacienteForm.get('lastName').touched
    );
  }
  get codigoNoValido() {
    return (
      this.pacienteForm.get('codigo').invalid &&
      this.pacienteForm.get('codigo').touched
    );
  }

  get dniNoValido() {
    return (
      this.pacienteForm.get('dni').invalid &&
      this.pacienteForm.get('dni').touched
    );
  }

  get telefonoNoValido() {
    return (
      this.pacienteForm.get('number').invalid &&
      this.pacienteForm.get('number').touched
    );
  }

  get fechaNoValido() {
    return (
      this.pacienteForm.get('date').invalid &&
      this.pacienteForm.get('date').touched
    );
  }

  onGoBackToList(): void {
    this.router.navigate(['/paciente/registrado']);
  }

}
