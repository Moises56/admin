import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// *Components
import { InicioComponent } from './components/inicio/inicio.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { PerfilComponent} from './components/perfil/perfil.component';
import { EmpresasComponent} from './components/empresas/empresas.component';
import { MotoristasComponent} from './components/motoristas/motoristas.component';
import { ClientesComponent} from './components/clientes/clientes.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard] // * Protegiendo la ruta
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'categoria',
    component: CategoriasComponent
  },
  {
    path: 'empresa',
    component: EmpresasComponent
  },
  {
    path: 'motorista',
    component: MotoristasComponent
  },
  {
    path: 'cliente',
    component: ClientesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
