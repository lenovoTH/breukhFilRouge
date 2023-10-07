import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpRoutingModule } from './rp-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlannificationCoursComponent } from './plannification-cours/plannification-cours.component';
import { CourComponent } from './cour/cour.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListecourComponent } from './listecour/listecour.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DashboardComponent,
    PlannificationCoursComponent,
    CourComponent,
    ListecourComponent
  ],
  imports: [
    CommonModule,
    RpRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserAnimationsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ]
})
export class RpModule { }

