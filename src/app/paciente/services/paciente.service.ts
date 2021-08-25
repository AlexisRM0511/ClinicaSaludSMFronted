import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Emergencia } from '../modal/emergencia';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  emergencia: Observable<Emergencia[]>;
  emergencias: Emergencia;
  paciente: Observable<Paciente[]>;

  private especialidadCollection: AngularFirestoreCollection<Emergencia>;
  private pacienteCollection: AngularFirestoreCollection<Paciente>;

  constructor(private afs: AngularFirestore) {
    this.especialidadCollection = afs.collection<Emergencia>('emergencia');
    this.getEmergencia();
    this.pacienteCollection = afs.collection<Paciente>('pacientes');
    this.getPacientes();
  }

  onDeletePacientes(pacienteId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.pacienteCollection.doc(pacienteId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  onGetEmergencia(emergenciaId: string) {
    return this.afs.collection('pacientes').doc(emergenciaId).snapshotChanges();

  }

  onDeleteEmergencia(doctorID: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.especialidadCollection.doc(doctorID).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  onSavePacientes(paciente: Paciente, pacienteId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = pacienteId || this.afs.createId();
        const data = { id, ...paciente };
        const result = this.pacienteCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  onSaveEmergencia(emergencia: Emergencia, emergenciaId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = emergenciaId || this.afs.createId();
        const data = { id, ...emergencia };
        const result = this.especialidadCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  getPacientes(): void {
    this.paciente = this.pacienteCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Paciente))
      );
  }

  getOnePaciente(pacienteId: string) {
    /* return this.pacienteCollection.doc(pacienteId).snapshotChanges(); */
    return this.afs.doc<Paciente>(`pacientes/${pacienteId}`).valueChanges();
  }

  getEmergencia(): void {
    this.emergencia = this.especialidadCollection
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => a.payload.doc.data() as Emergencia)
        )
      );
  }

}
