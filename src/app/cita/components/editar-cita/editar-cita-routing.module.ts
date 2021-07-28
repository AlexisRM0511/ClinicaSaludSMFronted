import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarCitaComponent } from "./editar-cita.component";

const routes: Routes = [{ path: '', component: EditarCitaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
