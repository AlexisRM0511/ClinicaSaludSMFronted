import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Especialidad } from 'src/app/cita/model/especialidad';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  especialidad: Observable<Especialidad[]>;
  doctor: Observable<Doctor[]>;

  private especialidadCollection: AngularFirestoreCollection<Especialidad>;
  private doctorCollection: AngularFirestoreCollection<Doctor>;

  constructor(private readonly afs:AngularFirestore) {
    this.especialidadCollection=afs.collection<Especialidad>('especialidad');
    this.doctorCollection=afs.collection<Doctor>('doctor');

    this.getEspecialidad();
  }

  onSaveCitas(doctor: Doctor, doctorId:string):Promise<void>{
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
      map(actions => actions.map(a=>a.payload.doc.data() as Especialidad))
    )
  }
}
