import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { path: 'contatos', component: ContatosComponent },
   { path: 'servicos' , component: ServicosComponent },
   { path: ''        , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
