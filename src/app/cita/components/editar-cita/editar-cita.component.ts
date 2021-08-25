import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from '../../model/cita';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.css']
})
export class EditarCitaComponent implements OnInit {

  cita: Cita;
  citaForm: FormGroup;


  constructor(private router: Router, private fb: FormBuilder, private citaService: CitaService) { 
    const navigation = this.router.getCurrentNavigation();
    this.cita = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.cita === 'undefined'){
      this.router.navigate(['/citas/crear']);
    }else{
      this.citaForm.patchValue(this.cita);
    }
  }

  onSave(): void{
    console.log('Saved', this.citaForm.value);
    if (this.citaForm.valid){
      const cita = this.citaForm.value;
      const citaId = this.cita?.id || null;
      this.citaService.onSaveCita(cita, citaId)
      this.citaForm.reset();
    }
  }

  onGoBackToList():void{
    this.router.navigate(['/citas/registro-citas']);
  }

  isValidField(field: string):string{
    const validatedField = this.citaForm.get(field);
    return ( !validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }


  private initForm(): void{
    this.citaForm = this.fb.group({
      DNI: ['', [Validators.required, Validators.pattern("[0-9]{8}")]],
      name: ['', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]],
      fecha: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      horario: ['', [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
      codigo: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9- ]+$')]],
    });  
  }

  get dniNoValido(){
    return this.citaForm.get('DNI').invalid 
            && this.citaForm.get('DNI').touched;
  }

  get nombreNoValido(){
    return this.citaForm.get('name').invalid 
            && this.citaForm.get('name').touched;
  }

  get apellidoNoValido(){
    return this.citaForm.get('lastname').invalid 
            && this.citaForm.get('lastname').touched;
  }

  get fechaNoValido(){
    return this.citaForm.get('fecha').invalid 
            && this.citaForm.get('fecha').touched;
  }

  get horarioNoValido(){
    return this.citaForm.get('horario').invalid 
            && this.citaForm.get('horario').touched;
  }

  get codigoNoValido(){
    return this.citaForm.get('codigo').invalid 
            && this.citaForm.get('codigo').touched;
  }

}
