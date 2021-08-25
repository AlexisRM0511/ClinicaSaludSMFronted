import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cita } from '../model/cita';
import { Especialidad } from '../model/especialidad';
import { Horario } from '../model/horario';
import { Doctores } from 'src/app/doctor/model/doctor';
import { Asegurado } from '../model/asegurado';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  especialidad: Observable<Especialidad[]>;
  medico: Observable<Doctores[]>;
  horario: Observable<Horario[]>;
  cita: Observable<Cita[]>;
  asegurado: Observable<Asegurado[]>;

  private especialidadCollection: AngularFirestoreCollection<Especialidad>;
  private doctorCollection: AngularFirestoreCollection<Doctores>;
  private horarioCollection: AngularFirestoreCollection<Horario>;
  private citaCollection: AngularFirestoreCollection<Cita>;
  private aseguradoCollection: AngularFirestoreCollection<Asegurado>;

  constructor(private readonly afs: AngularFirestore) {
    this.especialidadCollection = afs.collection<Especialidad>('especialidad');
    this.doctorCollection = afs.collection<Doctores>('doctor');
    this.horarioCollection = afs.collection<Horario>('horario');
    this.citaCollection = afs.collection<Cita>('cita');
    this.aseguradoCollection = afs.collection<Asegurado>('pacientes');
    this.getEspecialidad();
    this.getMedico();
    this.getHorario();
    this.getCita();
    this.getAsegurado();
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
    this.medico = this.doctorCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Doctores))
      );
  }

  getAsegurado(): void {
    this.asegurado = this.aseguradoCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Asegurado))
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

  onDeleteCita(citaId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.citaCollection.doc(citaId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  onSaveCita(
    cita: Cita,
    citaId: string
  ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = citaId || this.afs.createId();
        const data = { id, ...cita};
        const result = await this.citaCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }
}
