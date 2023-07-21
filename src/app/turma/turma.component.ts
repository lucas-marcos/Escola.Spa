import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EscolaService } from '../escola.service';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss'],
})
export class TurmaComponent implements OnInit {
  modalAberto: boolean = false;
  turma: any;
  turmas: any[] = [];
  escolas: any[] = [];

  displayedColumns: string[] = ['nome', 'numero', 'descricao', 'escola', 'acao'];

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private escolaService: EscolaService
  ) {}

  ngOnInit() {
    this.turma = {
      id: 0,
      nome: '',
      numero: 0,
      descricao: '',
      escolaId: 0,
    };

    this.escolaService.listarEscolas().subscribe((escolas) => {
      this.escolas = escolas;
    });

    this.listarTurmas();
  }

  fecharModal() {
    this.turma = {id: 0,nome: '',numero: 0,descricao: '',escolaId: 0  };


    this.modalAberto = false;
  }

  abrirModal() {
    this.modalAberto = true;
  }

  realizarRequisicao() {
    let url = 'https://localhost:7009/Turma';

    if (this.turma.id == 0) {
      this.http.post(url, this.turma).subscribe(
        (result) => {
          this.toastr.success('Turma cadastrada com sucesso!');
          this.fecharModal();
          this.listarTurmas();
        },
        (error) => {
          this.toastr.error('Erro ao cadastrar turma! \n' + error.error);
          console.error(error);
        }
      );
    } else {
      this.http.put(url, this.turma).subscribe(
        (result) => {
          this.toastr.success('Turma editaa com sucesso!');
          this.fecharModal();
          this.listarTurmas();
        },
        (error) => {
          this.toastr.error('Erro ao editar turma! \n' + error.error);
          console.error(error);
        }
      );
    }
  }

  listarTurmas() {
    let url = 'https://localhost:7009/Turma';

    this.http.get<any[]>(url).subscribe(
      (result) => {
        this.turmas = result;
      },
      (error) => {
        this.toastr.error(
          'Não foi possível listar as turmas! \n' + error.error
        );
        console.error(error);
      }
    );
  }

  editarTurma(turma: any) {
    this.turma = { ...turma };
    this.abrirModal();
  }
}
