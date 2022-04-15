import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DocumentsInterface } from 'src/app/models/documents';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  
  constructor(private readonly afs: AngularFirestore) { }

  onSaveDocument(documentNew: DocumentsInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Documents")
        .add(documentNew)
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

  onUpdateDocument(uid: string, documentNew: DocumentsInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Documents")
        .doc(uid)
        .update(documentNew)
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

  onDeleteDocument(uid: string) {
    return this.afs
      .collection("Documents")
      .doc(uid)
      .delete()
  }

  getDocuments(): Observable<DocumentsInterface[]> {
    return this.afs
      .collection("Documents")
      .snapshotChanges()
  }

  getDocument(uid: string): Observable<DocumentsInterface> {
    return this.afs
      .collection("Documents")
      .doc(uid)
      .valueChanges()
  }
}
