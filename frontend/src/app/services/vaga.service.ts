import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { VagasModel } from '../models/vagas';

@Injectable({
  providedIn: 'root',
})
export class VagaService {
  private apiUrl = 'https://oportunidades-e-vagas.onrender.com/vagas';

  constructor(private http: HttpClient) {}

  listarTodas(): Observable<VagasModel[]> {
    return this.http.get<VagasModel[]>(this.apiUrl).pipe(
      retry({ count: 2, delay: 1500 })
    );
  }

  adicionar(vaga: Omit<VagasModel, 'id'>): Observable<VagasModel> {
  return this.http.post<VagasModel>(this.apiUrl, vaga);
}

  atualizar(id: number, vaga: VagasModel): Observable<VagasModel> {
    return this.http.put<VagasModel>(`${this.apiUrl}/${id}`, vaga);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
