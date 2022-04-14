import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { UsersInterface } from 'src/app/models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: Observable<UsersInterface[]>
  private userCollection: AngularFirestoreCollection<UsersInterface>;

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.userCollection = afs.collection<UsersInterface>('Users');
    this.getUsers();
  }

  async loginEmailUser(email: string, pass: string) {
    await this.afsAuth.signInWithEmailAndPassword(email, pass)
      .then(data => {
        console.log(data);
        if (data.user != null) {
          console.log("Usuario logueado")
          console.log(this.users)
        }
      })
      .catch(err => {
        console.log(err);
      })
    console.log("DAAA")
  }

  async registerUser(email: string, pass: string, name: string, lastname: string, code: string) {
    await this.afsAuth.createUserWithEmailAndPassword(email, pass)
      .then(async data => {
        console.log(data);
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Users/${data.user.uid}`);
        const dataUser: UsersInterface = {
          id: data.user.uid,
          email: data.user.email,
          password: pass,
          name: name,
          lastname: lastname,
          code: code,
          type: '1',
          status: '1'
        };
        await userRef.set(dataUser, { merge: true })
      }).catch(err => console.log(err))
      .finally(async () => {
        await this.loginEmailUser(email, pass)
      });
  }

  logoutUser() {
    return this.afsAuth.signOut();
  }

  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }


  getUsers() {
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()))
    )
  }
}

