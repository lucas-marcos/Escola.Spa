import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';


// Terceiros
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';

// Componentes Locais
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EscolaComponent } from './escola/escola.component';
import { TurmaComponent } from './turma/turma.component';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolaComponent,
    TurmaComponent,
    AlunoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    CommonModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
