import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Emergencia } from '../modal/emergencia';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  emergencia: Observable<Emergencia[]>;

  private especialidadCollection: AngularFirestoreCollection<Emergencia>;

  constructor(private readonly afs: AngularFirestore) { 
    this.especialidadCollection = afs.collection<Emergencia>('emergencia');
    this.getEmergencia();
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
