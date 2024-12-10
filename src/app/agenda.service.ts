import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compromisso } from './compromisso';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url='https://api.agendafatecvalentim.duckdns.org/compromisso'

  constructor(private http:HttpClient) { }

  getCompromisso(): Observable<Compromisso[]>{
    return this.http.get<Compromisso[]>(this.url);
  }

  getCompromissosById(id:number): Observable<Compromisso>{
    return this.http.get<Compromisso>(`${this.url}/${id}`);
  }

  delete(compromisso: Compromisso):Observable<void>{
    return this.http.delete<void> (`${this.url}/${compromisso.id}`)
  }

  update(compromisso: Compromisso):Observable<Compromisso>{
    return this.http.put<Compromisso>(`${this.url}/${compromisso.id}`, compromisso)
  }

  save(compromisso: Compromisso):Observable<Compromisso>{
    return this.http.post<Compromisso>(this.url, compromisso)
  }

}
