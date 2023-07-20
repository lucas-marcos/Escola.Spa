import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.scss'],
})
export class EscolaComponent {
  modalAberto: boolean = false;
  escola: any = { nome: '', endereco: '', telefone: '', email: '', cnpj: '' };
  modoEdicao: boolean = false;

  constructor(private http: HttpClient) {}

  salvarEscola() {
    console.log(this.escola);
    this.fecharModal();
  }

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.escola = { nome: '', endereco: '', telefone: '', email: '', cnpj: '' };
    this.modoEdicao = false;
  }

  realizarRequisicao() {
    const url = 'https://localhost:7009/Escola';

    // Define os dados a serem enviados no corpo da requisição (no formato JSON)
    const body = {
      nome: 'string',
      endereco: 'string',
      telefone: 'string',
      email: 'user@example.com',
      cnpj: '24.657.575/1707-80',
    };
debugger
    // Realiza a requisição POST com os dados definidos
    this.http.post(url, this.escola).subscribe(
      (response) => {
        console.log('Resposta da API:', response);
        // Faça o que for necessário com os dados da resposta aqui
      },
      (error) => {
        console.error('Erro na requisição:', error);
      }
    );
  }
}
