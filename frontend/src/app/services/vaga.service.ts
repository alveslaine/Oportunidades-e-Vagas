import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VagasModel } from '../models/vagas';

@Injectable({
  providedIn: 'root',
})
export class VagaService {
  private apiUrl = 'https://oportunidades-e-vagas.onrender.com/vagas';

  constructor(private http: HttpClient) {}

  listarTodas(): Observable<VagasModel[]> {
    return this.http.get<VagasModel[]>(this.apiUrl);
  }
}
