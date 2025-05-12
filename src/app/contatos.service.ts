import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Telefone } from './contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  
apiUrl = "http://localhost:3000/Telefone";

  constructor(private http: HttpClient) { }

  getAll() : Observable<Telefone[]>{
    return this.http.get<Telefone[]>(this.apiUrl);
  }

  save(telefone: Telefone): Observable<Telefone>{
    return this.http.post<Telefone>(this.apiUrl, telefone);    
  }

  delete(telefone:Telefone): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${telefone.id}`);
  }

  update(telefone: Telefone) : Observable<Telefone> {
    return this.http.put<Telefone>(`${this.apiUrl}/${telefone.id}`,telefone);
  }

}

