import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Paciente } from '../../../firebase/paciente';
import { PacientesService } from '../../../firebase/pacientes.service';

@Component({
  selector: 'app-paciente-detalle',
  templateUrl: './paciente-detalle.component.html',
  styleUrls: ['./paciente-detalle.component.css']
})
export class PacienteDetalleComponent implements OnInit {
  paciente: Paciente = null;
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };

  constructor(private router: Router, private pacienteService: PacientesService) {
    const navigation = this.router.getCurrentNavigation();
    this.paciente = navigation?.extras?.state.value;
   }

  ngOnInit(): void {
    if (typeof this.paciente === 'undefined'){
      this.router.navigate(['/paciente/registrar']);
    }
  }

  onGoToEdit():void{
    this.navigationExtras.state.value = this.paciente;
    this.router.navigate(['/paciente/editar'], this.navigationExtras)
  }

  async onGoToDelete():Promise<void>{
    try {
      await this.pacienteService.onDeletePacientes(this.paciente?.codigo);
      alert('Paciente Eliminado Correctamente');
      this.onGoBackToList();
    } catch (error) {
      console.log(error);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['/paciente/registrado']);
  }

}
