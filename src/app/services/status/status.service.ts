import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { StatusInterface } from 'src/app/models/status';
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private readonly afs: AngularFirestore) { }

  onSaveStatus(statusNew: StatusInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Status")
        .add(statusNew)
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

  onUpdateStatus(uid: string, statusNew: StatusInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Status")
        .doc(uid)
        .update(statusNew)
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

  onDeleteStatus(uid: string) {
    return this.afs
      .collection("Status")
      .doc(uid)
      .delete()
  }

  getState(): Observable<StatusInterface[]> {
    return this.afs.collection("Status").snapshotChanges()
  }

  getStatus(uid: string): Observable<StatusInterface> {
    return this.afs
      .collection("Status")
      .doc(uid)
      .valueChanges()
  }
}
