import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escola-modal',
  templateUrl: './escola-modal.component.html',
  styleUrls: ['./escola-modal.component.scss']
})
export class EscolaModalComponent {
  @Input() modalAberto: boolean = false;
  @Input() escola: any; // Adicione essa linha para receber a escola como input

  constructor() { }

  fecharModal() {
    this.modalAberto = false;
  }

  salvarEscola() {
    this.fecharModal();
  }
}
