import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatusInterface } from 'src/app/models/status';
@Injectable({
  providedIn: 'root'
})
export class StatusService {
  statuss: Observable<StatusInterface[]>
  private statusCollection: AngularFirestoreCollection<StatusInterface>;

  constructor(private readonly afs: AngularFirestore) {
    this.statusCollection = afs.collection<StatusInterface>('Status');
    this.getStatus();
  }

  onDeleteStatus(uid: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.statusCollection.doc(uid).delete();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })
  }

  onSaveStatus(uid: string, statusNew: StatusInterface): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.statusCollection.doc(uid).set(statusNew)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }

  private getStatus(): void {
    this.statuss = this.statusCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data())
      )
    )
  }
}
