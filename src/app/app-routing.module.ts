import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaComponent } from './escola/escola.component';
import { TurmaComponent } from './turma/turma.component';
import { AlunoComponent } from './aluno/aluno.component';


const routes: Routes = [
  { path: 'escola', component: EscolaComponent },
  { path: 'turma', component: TurmaComponent },
  { path: 'aluno', component: AlunoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
