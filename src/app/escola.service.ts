import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class EscolaService {
  private url = 'https://localhost:7009/Escola';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  cadastrarEscola(escola: any) {
    return this.http.post(this.url, escola)
  }

  atualizarEscola(escola: any) {
    return this.http.put(this.url, escola);
  }

  listarEscolas() {
    return this.http.get<any[]>(this.url);
  }

  excluirEscola(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.delete<any[]>(url);
  }
}
