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
    this.escola = {
      nome: '',
      endereco: '',
      telefone: '',
      email: '',
      cnpj: '',
      id: 0,
    };
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
  }

  realizarRequisicao() {
    const url = 'https://localhost:7009/Escola';

    if (this.escola.id == 0) {
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
    else{
      this.http.put(url, this.escola).subscribe(
        (response) => {
          console.log('Resposta da API:', response);
          this.toastr.success('escola atualizada com sucesso!');
          this.listarEscolas();
          this.fecharModal();
        },
        (error) => {
          console.error('Erro na requisição:', error);
          this.toastr.error(
            'Não foi possível atualizar a escola pelo seguinte motivo: \n' +
              error.error
          );
        }
      );
    }
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
    this.escola =  {...escola};
    this.abrirModal();
  }

  excluirEscola(escola: any) {
    const url = 'https://localhost:7009/Escola/' + escola.id;

    this.http.delete<any[]>(url).subscribe(
      (response) => {
        console.log('Resposta da API:', response);
        this.toastr.success('Escola removida com sucesso!');
        this.listarEscolas();
      },
      (error) => {
        console.error('Erro na requisição:', error);
        this.toastr.error(
          'Não foi possível deletar a escola pelo seguinte motivo: \n' +
            error.error
        );
      }
    );
  }
}
