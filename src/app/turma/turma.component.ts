import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TurmaService } from '../turma.service';
import { EscolaService } from '../escola.service';

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
    private toastr: ToastrService,
    private turmaService: TurmaService,
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
    this.turma = { id: 0, nome: '', numero: 0, descricao: '', escolaId: 0 };
    this.modalAberto = false;
  }

  abrirModal() {
    this.modalAberto = true;
  }

  realizarRequisicao() {
    if (this.turma.id == 0) {
      this.turmaService.cadastrarTurma(this.turma).subscribe(
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
      this.turmaService.editarTurma(this.turma).subscribe(
        (result) => {
          this.toastr.success('Turma editada com sucesso!');
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
    this.turmaService.listarTurmas().subscribe(
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

  excluirTurma(turma: any) {
    this.turmaService.excluirTurma(turma.id).subscribe(
      (result) => {
        this.toastr.success('Turma deletada com sucesso!');
        this.listarTurmas();
      },
      (error) => {
        this.toastr.error(
          'Não foi possível deletar a turma! \n' + error.error
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
