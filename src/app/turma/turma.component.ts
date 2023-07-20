import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss'],
})
export class TurmaComponent implements OnInit {
  modalAberto: boolean = false;
  turma: any;
  escolas: string[] = []; // Lista de Escolas disponíveis

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {
    this.turma = {
      id: 0,
      nome: '',
      numero: '',
      descricao: '',
      escola: '', // Inicializa a propriedade 'escola' da turma
    };

    this.obterEscolas(); // Chama o método para obter a lista de Escolas disponíveis
  }

  fecharModal() {
    this.modalAberto = false; // Corrige o valor para fechar o modal
  }

  abrirModal() {
    this.modalAberto = true; // Corrige o valor para abrir o modal
  }

  realizarRequisicao() {
    // Implemente aqui a lógica para enviar a requisição com os dados da turma
    // Por exemplo, usando o HttpClient para enviar um POST ou PUT
    // Exemplo:
    // this.http.post('/api/turma', this.turma).subscribe(response => {
    //   this.toastr.success('Turma cadastrada com sucesso!');
    //   this.fecharModal();
    // }, error => {
    //   this.toastr.error('Erro ao cadastrar turma. Por favor, tente novamente.');
    // });
  }

  obterEscolas() {
    // Implemente aqui a lógica para obter a lista de Escolas disponíveis
    // Por exemplo, usando o HttpClient para obter os dados da API
    // Exemplo:
    // this.http.get<string[]>('/api/escolas').subscribe(escolas => {
    //   this.escolas = escolas;
    // }, error => {
    //   this.toastr.error('Erro ao obter a lista de escolas. Por favor, tente novamente.');
    // });
  }
}
