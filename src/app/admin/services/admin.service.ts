import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admin: Observable<Admin[]>;
  private adminCollection: AngularFirestoreCollection<Admin>;

  constructor(private readonly afs: AngularFirestore) {
    this.adminCollection = afs.collection<Admin>('admin');
    this.getAdmins();
  }

  onDeleteAdmin(adminId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.adminCollection.doc(adminId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  onSaveAdmin(admin: Admin, adminId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = adminId || this.afs.createId();
        const data = { id, ...admin };
        const result = this.adminCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  getAdmins(): void {
    this.admin = this.adminCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Admin))
      );
  }

  getOneAdmin(adminId: string) {
    return this.afs.doc<Admin>(`pacientes/${adminId}`).valueChanges();
  }
}
