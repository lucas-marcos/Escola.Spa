import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

interface Aluno {
  id: number;
  nome: string;
  cpf: string;
  endereco: string;
  idade: number;
  turmaId: number;
}

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss'],
})
export class AlunoComponent implements OnInit {
  modalAberto: boolean = false;
  alunos: Aluno[] = [];
  aluno: Aluno ={
    id: 0, cpf: '', endereco: '', idade: 0, nome: '', turmaId: 0
  };

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {}

  abrirModal() {
    this.modalAberto = true;
  }


  fecharModal() {
    this.modalAberto = false;
  }

  realizarRequisicao(){

  }
}
