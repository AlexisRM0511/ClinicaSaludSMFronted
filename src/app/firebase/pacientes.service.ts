import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';
import {map} from 'rxjs/operators';
import { reject, resolve } from 'q';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  paciente: Observable<Paciente[]>;
  private pacienteCollection: AngularFirestoreCollection<Paciente>;
  
  constructor(private readonly afs:AngularFirestore) { 
    this.pacienteCollection=afs.collection<Paciente>('pacientes')
    this.getPacientes();
  }

  onDeletePacientes(pacienteId:string):Promise<void>{
    return new Promise (async (resolve,reject)=>{
      try {
        const result =this.pacienteCollection.doc(pacienteId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }
  
  onSavePacientes(paciente:Paciente, pacienteId:string):Promise<void>{
    return new Promise(async (resolve,reject)=>{
      try {
        const id= pacienteId || this.afs.createId();
        const data = {id, ...paciente}
        const result = this.pacienteCollection.doc(id).set(data)
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    })
  }
  
  getPacientes():void{
    this.paciente=this.pacienteCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>a.payload.doc.data() as Paciente))
    )
  }
}
