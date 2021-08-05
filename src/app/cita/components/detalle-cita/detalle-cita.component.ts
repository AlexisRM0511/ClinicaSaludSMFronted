import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cita } from '../../model/cita';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.css']
})
export class DetalleCitaComponent implements OnInit {
  cita: Cita = null;
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };

  constructor(private router: Router, private citaService: CitaService) { 
    const navigation = this.router.getCurrentNavigation();
    this.cita = navigation?.extras?.state.value;
   }

  ngOnInit(): void {
    if (typeof this.cita === 'undefined'){
      this.router.navigate(['/citas/registro-citas']);
    }
  }

  onGoToEdit():void{
    this.navigationExtras.state.value = this.cita;
    this.router.navigate(['/citas/editar-cita'], this.navigationExtras)
  }

  async onGoToDelete():Promise<void>{
    try {
      await this.citaService.onDeleteCita(this.cita?.id);
      alert('Deleted');
      this.onGoBackToList();
    } catch (error) {
      console.log(error);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['/citas/registro-citas']);
  }

}
