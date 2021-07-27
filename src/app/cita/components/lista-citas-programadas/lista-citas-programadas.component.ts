import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-lista-citas-programadas',
  templateUrl: './lista-citas-programadas.component.html',
  styleUrls: ['./lista-citas-programadas.component.css']
})
export class ListaCitasProgramadasComponent implements OnInit {

  citas$ = this.citasService.cita;

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };

  constructor(private router: Router, private citasService: CitaService) { }

  ngOnInit(): void {
  }

  
  onGoToEdit(item: any):void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras)
  }

  onGoToSee(item: any):void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras)
  }

  async onGoToDelete(citaId: string):Promise<void>{
    try {
      await this.citasService.onDeleteCita(citaId);
      alert('Borrado')
    } catch (error) {
      console.log(error);
    }
  }

}
