import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compromisso } from './compromisso';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url='http://localhost:8080/Compromisso'

  constructor(private http:HttpClient) { }

  getCompromisso(): Observable<Compromisso[]>{
    return this.http.get<Compromisso[]>(this.url);
  }

}