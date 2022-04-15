import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { UsersInterface } from 'src/app/models/users';
import { UserService } from 'src/app/services/users/user.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  users: UsersInterface[]

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore, private userSvc: UserService) {

  }

  async login(email: string, pass: string) {
    await this.afsAuth.signInWithEmailAndPassword(email, pass)
      .then(res => {
        sessionStorage.setItem('userID', res.user.uid)
      })
      .catch(err => { return err })
  }

  async registerUser(email: string, pass: string) {
    await this.afsAuth.createUserWithEmailAndPassword(email, pass)
      .then(res => { return res })
      .catch(err => { return err })
  }

  logoutUser() {
    return this.afsAuth.signOut();
  }

  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
}

