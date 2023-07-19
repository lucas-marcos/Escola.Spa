import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaComponent } from './escola/escola.component';


const routes: Routes = [
  { path: 'escola', component: EscolaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
