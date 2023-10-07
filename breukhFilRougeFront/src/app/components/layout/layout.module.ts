import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
// import { PagesRoutingModule } from '../pages/pages-routing.module';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  exports: [
    NavbarComponent
  ],
})
export class LayoutModule { }

