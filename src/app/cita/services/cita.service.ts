import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cita } from '../model/cita';
import { Especialidad } from '../model/especialidad';
import { Horario } from '../model/horario';
import { Medico } from '../model/medico';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  especialidad: Observable<Especialidad[]>;
  medico: Observable<Medico[]>;
  horario: Observable<Medico[]>;
  cita: Observable<Cita[]>;

  private especialidadCollection: AngularFirestoreCollection<Especialidad>;
  private medicoCollection: AngularFirestoreCollection<Especialidad>;
  private horarioCollection: AngularFirestoreCollection<Horario>;
  private citaCollection: AngularFirestoreCollection<Cita>;

  constructor(private readonly afs:AngularFirestore) { 
    this.especialidadCollection=afs.collection<Especialidad>('especialidad');
    this.medicoCollection=afs.collection<Medico>('medico');
    this.horarioCollection=afs.collection<Horario>('horario');
    this.citaCollection=afs.collection<Cita>('cita');
    this.getEspecialidad();
    this.getMedico();
    this.getHorario();
    this.getCita();
  }

  getEspecialidad():void{
    this.especialidad=this.especialidadCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>a.payload.doc.data() as Especialidad))
    )
  }

  getMedico():void{
    this.medico=this.medicoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>a.payload.doc.data() as Medico))
    )
  }

  getHorario():void{
    this.horario=this.horarioCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>a.payload.doc.data() as Horario))
    )
  }

  getCita():void{
    this.cita=this.citaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>a.payload.doc.data() as Cita))
    )
  }

  onDeleteCita(citaId:string): Promise<void>{
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.citaCollection.doc(citaId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message)
      }
    });
  }

  onSaveCita(cita: Cita, citaId: string): Promise<void>{
    return new Promise(async (resolve, reject) => {
      try {
        const id = citaId || this.afs.createId();
        const data = { id, ...cita };
        const result = await this.citaCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message)
      }
    });
  }

}
