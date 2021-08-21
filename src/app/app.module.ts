import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthGuard } from './auth.guard';
import { TokenService } from './services/token.service';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { MotoristasComponent } from './components/motoristas/motoristas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EmpresasComponent } from './components/empresas/empresas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriasComponent,
    PerfilComponent,
    SigninComponent,
    SignupComponent,
    InicioComponent,
    OrdenesComponent,
    MotoristasComponent,
    ClientesComponent,
    EmpresasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
