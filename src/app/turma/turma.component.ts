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
  escolas: any[] = []; // Lista de Escolas disponíveis

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

    this.obterEscolas();
  }

  fecharModal() {
    this.modalAberto = false;
  }

  abrirModal() {
    this.modalAberto = true;
  }

  realizarRequisicao() {
    let url = 'https://localhost:7009/Turma';

    this.http.post(url, this.turma).subscribe(
      (result) => {
        this.toastr.success('Turma cadastrada com sucesso!');
        this.fecharModal();
      },
      (error) => {
        this.toastr.error('Erro ao cadastrar turma! \n' + error.error);
        console.error(error);
      }
    );
  }

  obterEscolas() {}
}
