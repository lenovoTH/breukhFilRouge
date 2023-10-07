import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'rp', loadChildren: () => import('./rp/rp.module').then(m => m.RpModule) },
  { path: 'attache', loadChildren: () => import('./attache/attache.module').then(m => m.AttacheModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
