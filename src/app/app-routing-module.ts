import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dadosuser } from './pages/dadosuser/dadosuser';
import { Home } from './pages/home/home';
import { Teste1 } from './pages/teste1/teste1';
import { Teste2 } from './pages/teste2/teste2';
import { Teste3 } from './pages/teste3/teste3';
import { Resultado } from './pages/resultado/resultado';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: Home },
  { path: 'dadosuser', component: Dadosuser },
  { path: 'teste1', component: Teste1 },
  { path: 'teste2', component: Teste2 },
  { path: 'teste3', component: Teste3 },
  { path: 'resultado', component: Resultado },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
