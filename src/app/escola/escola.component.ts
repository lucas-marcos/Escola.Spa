import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { EscolaService } from '../escola.service';
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

  constructor(
    private escolaService: EscolaService,
    private toastr: ToastrService
  ) {}

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
    if (this.escola.id === 0) {
      this.escolaService.cadastrarEscola(this.escola).subscribe(
        (response) => {
          this.toastr.success('Escola cadastrada com sucesso!');
          this.listarEscolas();
          this.fecharModal();
        },
        (error: any | HttpErrorResponse) => {
          console.error('Erro na requisição:', error);
          this.toastr.error(
            'Não foi possível cadastrar a escola pelo seguinte motivo: \n' +
              error.error
          );
        }
      );
    } else {
      this.escolaService.atualizarEscola(this.escola).subscribe(
        (response) => {
          this.toastr.success('Escola atualizada com sucesso!');
          this.listarEscolas();
          this.fecharModal();
        },
        (error: any | HttpErrorResponse) => {
          console.error('Erro na requisição:', error);
          this.toastr.error(
            'Não foi possível atualizar a escola pelo seguinte motivo: \n' +
              error.error
          );
        }
      );
    }
  }

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.escola = { nome: '', endereco: '', telefone: '', email: '', cnpj: '' };
  }

  listarEscolas() {
    this.escolaService.listarEscolas().subscribe(
      (response: any[]) => {
        console.log('Resposta da API:', response);
        this.escolas = response;
      },
      (error: any | HttpErrorResponse) => {
        console.error('Erro na requisição:', error);
      }
    );
  }

  editarEscola(escola: any) {
    this.escola = { ...escola };
    this.abrirModal();
  }

  excluirEscola(escola: any) {
    this.escolaService.excluirEscola(escola.id).subscribe(
      (response: any[]) => {
        this.toastr.success('Escola removida com sucesso!');

        this.listarEscolas();
      },
      (error: any | HttpErrorResponse) => {
        this.toastr.error('Não foi possível remover a escola!');

        console.error('Erro na requisição:', error);
      }
    );
  }
}
