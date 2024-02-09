import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  URL_API = `http://localhost:3000/veiculos`;

  constructor(private http: HttpClient) { }

  /**
   * Rota que retorna todos os veículos que estão cadastrados.
   * @returns {Array} Retorna a lista de veículos.
  */
  getVeiculos(): Observable<any>{
    return this.http.get<any>(this.URL_API).pipe();
  }

  /**
   * Rota que retorna todos os veículos que estão cadastrados aplicando um filtro.
   * @param {string} filter - Variável que faz a filtragem.
   * @returns {Array} Retorna a lista de veículos filtrada.
  */
  getVeiculosFilter(filter: string): Observable<any>{
    return this.http.get<any>(`${this.URL_API}?q=${filter}`).pipe();
  }

  /**
   * Rota POST que adiciona novos veículos a base.
   * @param {object} payload - Objeto contendo os dados do novo veículo.
  */
  createVeiculo(payload: any): Observable<any>{
    return this.http.post<any>(this.URL_API, payload);
  }

  /**
   * Rota DELETE utilizada para remover um veículo da base.
   * @param {number} id - ID do veículo selecionado.
  */
  deleteVeiculo(id: number): Observable<any>{
    return this.http.delete<any>(`${this.URL_API}/${id}`)
  }
}
