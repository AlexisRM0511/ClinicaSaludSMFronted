import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }

  async login(email: string, pass: string) {
    await this.afsAuth.signInWithEmailAndPassword(email, pass)
      .then(res => {
        sessionStorage.setItem('userID', res.user.uid)
      })
      .catch(err => { return err })
  }

  async registerUser(email: string, pass: string) {
    await this.afsAuth.createUserWithEmailAndPassword(email, pass)
      .then(res => {
        sessionStorage.setItem('userID', res.user.uid)
      })
      .catch(err => { return err })
  }

  logoutUser() {
    return this.afsAuth.signOut();
  }

  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
}

