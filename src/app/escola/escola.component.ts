import { Component } from '@angular/core';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.scss']
})
export class EscolaComponent {
  modalAberto: boolean = false;
  escola: any = { nome: '', endereco: '', telefone: '', email: '', cnpj: '' };
  modoEdicao: boolean = false;

  constructor() { }

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
}
