import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UploadsInterface } from 'src/app/models/uploads';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  uploads: Observable<UploadsInterface[]>
  private uploadCollection: AngularFirestoreCollection<UploadsInterface>;

  constructor(private readonly afs: AngularFirestore) {
    this.uploadCollection = afs.collection<UploadsInterface>('Uploads');
    this.getUploads();
  }

  onDeleteUpload(uid: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.uploadCollection.doc(uid).delete();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })
  }

  onSaveUpload(uid: string, uploadNew: UploadsInterface): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.uploadCollection.doc(uid).set(uploadNew)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }

  private getUploads(): void {
    this.uploads = this.uploadCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data())
      )
    )
  }
}
