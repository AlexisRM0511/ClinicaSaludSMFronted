import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypesInterface } from 'src/app/models/types';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  types: Observable<TypesInterface[]>
  private typeCollection: AngularFirestoreCollection<TypesInterface>;

  constructor(private readonly afs: AngularFirestore) {
    this.typeCollection = afs.collection<TypesInterface>('Types');
    this.getTypes();
  }

  onDeleteType(uid: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.typeCollection.doc(uid).delete();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })
  }

  onSaveType(uid: string, typeNew: TypesInterface): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.typeCollection.doc(uid).set(typeNew)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }

  private getTypes(): void {
    this.types = this.typeCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data())
      )
    )
  }
}
