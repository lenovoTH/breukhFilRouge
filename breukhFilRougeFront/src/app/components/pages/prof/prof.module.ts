import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfRoutingModule } from './prof-routing.module';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { PlanningComponent } from './planning/planning.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [
    ListeCoursComponent,
    PlanningComponent
  ],
  imports: [
    CommonModule,
    ProfRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ]
})
export class ProfModule { }
