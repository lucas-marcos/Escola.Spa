import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  escola: any = null;

  salvarEscola(escola: any) {
    this.escola = escola;
  }
}
