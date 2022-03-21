import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './admin/admin.component';
import { EquitherapieComponent } from './equitherapie/equitherapie.component';
import { TherapeuteComponent } from './therapeute/therapeute.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'accueil'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'equitherapie', component: EquitherapieComponent},
  {path: 'therapeute', component: TherapeuteComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
