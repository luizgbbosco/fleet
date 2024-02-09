import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  URL_API = `http://localhost:3000/veiculos`;

  constructor(private http: HttpClient) { }

  getVeiculos(filter: string): Observable<any>{
    return this.http.get<any>(`${this.URL_API}?q=${filter}`).pipe();
  }

  createVeiculo(payload: any): Observable<any>{
    return this.http.post<any>(this.URL_API, payload);
  }

  deleteVeiculo(id: number): Observable<any>{
    return this.http.delete<any>(`${this.URL_API}/${id}`)
  }
}
