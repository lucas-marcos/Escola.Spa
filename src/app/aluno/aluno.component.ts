import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TurmaService } from '../turma.service';

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
  aluno: Aluno = {
    id: 0,
    cpf: '',
    endereco: '',
    idade: 0,
    nome: '',
    turmaId: 0,
  };
  turmas: any[] = [];

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private turmaService: TurmaService
  ) {}

  ngOnInit() {
    this.listarTurmas();
  }

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  realizarRequisicao() {
    let url = 'https://localhost:7009/Aluno';

    if (this.aluno.id == 0) {
      this.http.post(url, this.aluno).subscribe((result) => {
        this.toastr.success('Aluno cadastrado com sucesso!');
        this.fecharModal();
      },
      (error) => {
        this.toastr.error('Erro ao cadastrar aluno! \n' + error.error);
      });
    }
  }

  listarTurmas() {
    this.turmaService.listarTurmas().subscribe(
      (result) => {
        this.turmas = result;
      },
      (error) => {
        this.toastr.error('Erro ao listar turmas! \n' + error.error);
      }
    );
  }
}
