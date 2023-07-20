import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.scss'],
})
export class EscolaComponent {
  modalAberto: boolean = false;
  escola: any = { nome: '', endereco: '', telefone: '', email: '', cnpj: '' };
  modoEdicao: boolean = false;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

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

    this.http.post(url, this.escola).subscribe(
      (response) => {
        console.log('Resposta da API:', response);
        this.toastr.success('Escola cadastrada com sucesso!');
      },
      (error) => {
        console.error('Erro na requisição:', error);
        this.toastr.error(
          'Não foi possível cadastrar a esola pelo seguinte motivo: \n' +
            error.error
        );
      }
    );
  }
}
