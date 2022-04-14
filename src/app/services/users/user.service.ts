import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersInterface } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Observable<UsersInterface[]>
  private userCollection: AngularFirestoreCollection<UsersInterface>;

  constructor(private readonly afs: AngularFirestore) {
    this.userCollection = afs.collection<UsersInterface>('Users');
    this.getUsers();
  }

  onDeleteUser(uid: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.userCollection.doc(uid).delete();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })
  }

  onSaveUser(uid: string, userNew: UsersInterface): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.userCollection.doc(uid).set(userNew)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }

  private getUsers(): void {
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data())
      )
    )
  }
}
