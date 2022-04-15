import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TypesInterface } from 'src/app/models/types';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  
  constructor(private readonly afs: AngularFirestore) { }

  onSaveType(uploadNew: TypesInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Types")
        .add(uploadNew)
        .then(async response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        })
    })
  }

  onUpdateType(uid: string, uploadNew: TypesInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Types")
        .doc(uid)
        .update(uploadNew)
        .then(async response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        })
    })
  }

  onDeleteType(uid: string) {
    return this.afs
      .collection("Types")
      .doc(uid)
      .delete()
  }

  getTypes(): Observable<TypesInterface[]> {
    return this.afs
      .collection("Types")
      .snapshotChanges()
  }

  getType(uid: string): Observable<TypesInterface> {
    return this.afs
      .collection("Uploads")
      .doc(uid)
      .valueChanges()
  }
}
