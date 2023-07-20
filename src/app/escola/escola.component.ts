import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.scss'],
})
export class EscolaComponent implements OnInit {
  modalAberto: boolean = false;
  escola: any;
  modoEdicao: boolean = false;
  escolas: any[] = [];

  displayedColumns: string[] = [
    'nome',
    'endereco',
    'telefone',
    'email',
    'cnpj',
    'acao',
  ];

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {
    this.escola = { nome: '', endereco: '', telefone: '', email: '', cnpj: '' };
    this.listarEscolas();
  }

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
        this.listarEscolas();
        this.fecharModal();
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

  listarEscolas() {
    const url = 'https://localhost:7009/Escola';

    this.http.get<any[]>(url).subscribe(
      (response) => {
        console.log('Resposta da API:', response);
        this.escolas = response; // Armazena os dados retornados na variável escolas
      },
      (error) => {
        console.error('Erro na requisição:', error);
        this.toastr.error(
          'Não foi possível listar as escolas pelo seguinte motivo: \n' +
            error.error
        );
      }
    );
  }

  editarEscola(escola: any) {
    console.log('Editar escola:', escola);
  }

  excluirEscola(escola: any) {
    console.log('Excluir escola:', escola);
  }
}
