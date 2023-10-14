import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthClass } from 'src/app/guards/authclass.guard';
const routes: Routes = [
  { path: 'rp', loadChildren: () => import('./rp/rp.module').then(m => m.RpModule), canActivate: [AuthClass], data: { role: "RP" } },
  { path: 'prof', loadChildren: () => import('./prof/prof.module').then(m => m.ProfModule), canActivate: [AuthClass], data: { role: "prof" } },
  { path: 'attache', loadChildren: () => import('./attache/attache.module').then(m => m.AttacheModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
