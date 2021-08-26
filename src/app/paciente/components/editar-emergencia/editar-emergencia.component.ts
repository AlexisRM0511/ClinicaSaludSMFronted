import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Emergencia } from '../../modal/emergencia';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-editar-emergencia',
  templateUrl: './editar-emergencia.component.html',
  styleUrls: ['./editar-emergencia.component.css']
})
export class EditarEmergenciaComponent implements OnInit {

  emergencia: Emergencia;
  emergenciaForm: FormGroup;

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };

  constructor(private router: Router, private fb: FormBuilder, private emergenciaService: PacienteService) { 
    const navigation = this.router.getCurrentNavigation();
    this.emergencia = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    this.initForm();
    if (typeof this.emergencia === 'undefined'){
      this.router.navigate(['/paciente/emergencia']);
    }else{
      this.emergenciaForm.patchValue(this.emergencia);
    }
  }

  private initForm(): void{
    this.emergenciaForm = this.fb.group({
      codigo: [{value:'', disabled: true}, [Validators.required]],
      nombre: [{value:'', disabled: true}, [Validators.required]],
      fecha: [{value:'', disabled: true}, [Validators.required]],
      estado: ['', [Validators.required]],
      dni: [{ value:'',disabled: true}, [Validators.required]],
      monto: ['', [Validators.required]], 
    });  
  }

  isValidField(field: string):string{
    const validatedField = this.emergenciaForm.get(field);
    return ( !validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }

  onSave(): void{
    this.emergenciaForm.value.dni = this.emergencia.dni
    this.emergenciaForm.value.codigo = this.emergencia.codigo
    this.emergenciaForm.value.nombre = this.emergencia.nombre
    this.emergenciaForm.value.id = this.emergencia.id
    this.emergenciaForm.value.fecha = this.emergencia.fecha
    if (this.emergenciaForm.valid){
      const emergencia = this.emergenciaForm.value;
      const emergenciaId = this.emergencia?.id || null;
      this.emergenciaService.onSaveEmergencia(emergencia,emergenciaId)
      Swal.fire({
        title: 'Paciente en emergencia actualizado',
        icon: 'success',  
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/paciente/emergencia']);
        }
      });
    }
  }

  onGoBackToList():void{
    this.router.navigate(['/paciente/emergencia']);
  }
}
