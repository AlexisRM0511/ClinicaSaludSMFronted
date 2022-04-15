import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UsersInterface } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly afs: AngularFirestore) {}

  onSaveUser(userNew: UsersInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Users")
        .add(userNew)
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

  onUpdateUser(uid: string, userNew: UsersInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Users")
        .doc(uid)
        .update(userNew)
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

  onDeleteUser(uid: string) {
    return this.afs
      .collection("Users")
      .doc(uid)
      .delete()
  }

  getUsers(): Observable<UsersInterface[]> {
    return this.afs
      .collection("Users")
      .snapshotChanges()
  }

  getUser(uid: string): Observable<UsersInterface> {
    return this.afs
      .collection("Users")
      .doc(uid)
      .valueChanges()
  }
}
