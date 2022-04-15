import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UploadsInterface } from 'src/app/models/uploads';

@Injectable({
  providedIn: 'root'
})
  
export class UploadService {

  constructor(private readonly afs: AngularFirestore) { }

  onSaveUpload(uploadNew: UploadsInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Uploads")
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

  onUpdateUpload(uid: string, uploadNew: UploadsInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Uploads")
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

  onDeleteUpload(uid: string) {
    return this.afs
      .collection("Uploads")
      .doc(uid)
      .delete()
  }

  getUploads(): Observable<UploadsInterface[]> {
    return this.afs.collection("Uploads").snapshotChanges()
  }

  getUpload(uid: string): Observable<UploadsInterface> {
    return this.afs
      .collection("Uploads")
      .doc(uid)
      .valueChanges()
  }
}
