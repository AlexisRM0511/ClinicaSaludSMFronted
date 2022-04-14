import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocumentsInterface } from 'src/app/models/documents';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Observable<DocumentsInterface[]>
  private documentCollection: AngularFirestoreCollection<DocumentsInterface>;

  constructor(private readonly afs: AngularFirestore) {
    this.documentCollection = afs.collection<DocumentsInterface>('Documents');
    this.getDocuments();
  }

  onDeleteDocument(uid: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.documentCollection.doc(uid).delete();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })
  }

  onSaveDocument(uid: string, documentNew: DocumentsInterface): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.documentCollection.doc(uid).set(documentNew)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }

  private getDocuments(): void {
    this.documents = this.documentCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data())
      )
    )
  }
}
