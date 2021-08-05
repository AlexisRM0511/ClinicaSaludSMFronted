import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cita } from '../model/cita';
import { CitaProgramada } from '../model/cita-programada';
import { Especialidad } from '../model/especialidad';
import { Horario } from '../model/horario';
import { Medico } from '../model/medico';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  especialidad: Observable<Especialidad[]>;
  medico: Observable<Medico[]>;
  horario: Observable<Medico[]>;
  cita: Observable<Cita[]>;
  citaProgramada: Observable<CitaProgramada[]>;

  private especialidadCollection: AngularFirestoreCollection<Especialidad>;
  private medicoCollection: AngularFirestoreCollection<Especialidad>;
  private horarioCollection: AngularFirestoreCollection<Horario>;
  private citaCollection: AngularFirestoreCollection<Cita>;
  private citaProgramadaCollection: AngularFirestoreCollection<CitaProgramada>;

  constructor(private readonly afs: AngularFirestore) {
    this.especialidadCollection = afs.collection<Especialidad>('especialidad');
    this.medicoCollection = afs.collection<Medico>('medico');
    this.horarioCollection = afs.collection<Horario>('horario');
    this.citaCollection = afs.collection<Cita>('cita');
    this.citaProgramadaCollection =
      afs.collection<CitaProgramada>('cita-programada');
    this.getEspecialidad();
    this.getMedico();
    this.getHorario();
    this.getCita();
    this.getCitaProgramada();
  }

  onSaveCitas(cita: Cita, citaId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = citaId || this.afs.createId();
        const data = { id, ...cita };
        const result = this.citaCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  getEspecialidad(): void {
    this.especialidad = this.especialidadCollection
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => a.payload.doc.data() as Especialidad)
        )
      );
  }

  getMedico(): void {
    this.medico = this.medicoCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Medico))
      );
  }

  getHorario(): void {
    this.horario = this.horarioCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Horario))
      );
  }

  getCita(): void {
    this.cita = this.citaCollection
      .snapshotChanges()
      .pipe(map((actions) => actions.map((a) => a.payload.doc.data() as Cita)));
  }

  getCitaProgramada(): void {
    this.citaProgramada = this.citaProgramadaCollection
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => a.payload.doc.data() as CitaProgramada)
        )
      );
  }

  onDeleteCitaProgramada(citaProgramadaId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.citaProgramadaCollection.doc(citaProgramadaId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  onSaveCitaProgramada(
    citaProgramada: CitaProgramada,
    citaProgramdaId: string
  ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = citaProgramdaId || this.afs.createId();
        const data = { id, ...citaProgramada };
        const result = await this.citaProgramadaCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }
}
