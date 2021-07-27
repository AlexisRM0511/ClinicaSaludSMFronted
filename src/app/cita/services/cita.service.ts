import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidad } from '../model/especialidad';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  especialidad: Observable<Especialidad[]>

  constructor(private http: HttpClient) { }

  listarEspecialidad(){
    return "sss";/* this.http.get(); */
  }
}
