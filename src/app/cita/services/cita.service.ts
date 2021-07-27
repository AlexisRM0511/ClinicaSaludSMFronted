import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  private especialidadCollection: AngularFirestoreCollection<Especialidad>;
  private medicoCollection: AngularFirestoreCollection<Especialidad>;
  private horarioCollection: AngularFirestoreCollection<Horario>;

  constructor(private readonly afs:AngularFirestore) { 
    this.especialidadCollection=afs.collection<Especialidad>('especialidad');
    this.medicoCollection=afs.collection<Medico>('medico');
    this.horarioCollection=afs.collection<Horario>('horario');
    this.getEspecialidad();
    this.getMedico();
    this.getHorario();
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

}
