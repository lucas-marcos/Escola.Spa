import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  private url = 'https://localhost:7009/Turma';

  constructor(private http: HttpClient) {}

  cadastrarTurma(turma: any) {
    return this.http.post(this.url, turma);
  }

  editarTurma(turma: any) {
    return this.http.put(`${this.url}`, turma);
  }

  listarTurmas() {
    return this.http.get<any[]>(this.url);
  }

  excluirTurma(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
