import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Especialidad } from 'src/app/cita/model/especialidad';
import {Doctores} from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  especialidad: Observable<Especialidad[]>;
  doctor: Observable<Doctores[]>;
  private especialidadCollection: AngularFirestoreCollection<Especialidad>;
  private doctorCollection: AngularFirestoreCollection<Doctores>;
  
  constructor(private readonly afs: AngularFirestore) {
    this.especialidadCollection = afs.collection<Especialidad>('especialidad');
    this.doctorCollection = afs.collection<Doctores>('doctor');
    this.getEspecialidad();
    this.getDoctores();
  }

  onDeleteDoctores(doctorID: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.doctorCollection.doc(doctorID).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  onSaveDoctores(doctor: Doctores, doctorID: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = doctorID || this.afs.createId();
        const data = { id, ...doctor };
        const result = this.doctorCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  getDoctores(): void {
    this.doctor = this.doctorCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() ))
      );
  }

  getOneDoctores(doctorID: string) {
    return this.doctorCollection.doc(doctorID).snapshotChanges();
  }

  onSaveCitas(doctor: Doctores, doctorId:string):Promise<void>{
    return new Promise(async (resolve,reject)=>{
      try {
        const id= doctorId || this.afs.createId();
        const data = {id, ... doctor}
        const result = this.doctorCollection.doc(id).set(data)
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    })
  }

  getEspecialidad():void{
    this.especialidad=this.especialidadCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>a.payload.doc.data() ))
    )
  }
}
