import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaComponent } from './escola/escola.component';
import { TurmaComponent } from './turma/turma.component';


const routes: Routes = [
  { path: 'escola', component: EscolaComponent },
  { path: 'turma', component: TurmaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
