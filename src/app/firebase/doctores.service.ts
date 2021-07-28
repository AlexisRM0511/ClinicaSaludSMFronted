import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doctores } from './doctores';

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {
  doctores: Observable<Doctores[]>;
  private doctorCollection: AngularFirestoreCollection<Doctores>;

  constructor(private readonly afs: AngularFirestore) {
    this.doctorCollection = afs.collection<Doctores>('medico');
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
    this.doctores = this.doctorCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Doctores))
      );
  }

  getOneDoctores(doctorID:string){
    return this.doctorCollection.doc(doctorID).snapshotChanges();
  }
}
