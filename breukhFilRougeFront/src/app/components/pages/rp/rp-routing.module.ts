import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannificationCoursComponent } from './plannification-cours/plannification-cours.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourComponent } from './cour/cour.component';
import { ListecourComponent } from './listecour/listecour.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { Roles } from 'src/app/models/model';

const routes: Routes = [
  // { path: 'cour', component: CourComponent , canActivate: [AuthGuard], data:{role:rp}},
  { path: 'cour', component: CourComponent },
  { path: 'session/:id', component: PlannificationCoursComponent },
  { path: 'listecour', component: ListecourComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inscription/:id', component: InscriptionComponent },
  { path: 'listeclasse', component: ListeClasseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpRoutingModule { }


