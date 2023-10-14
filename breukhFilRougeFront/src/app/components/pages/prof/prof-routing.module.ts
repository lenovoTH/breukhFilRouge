import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { PlanningComponent } from './planning/planning.component';

const routes: Routes = [
  { path: 'listecour', component: ListeCoursComponent },
  { path: 'planning', component: PlanningComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfRoutingModule { }
