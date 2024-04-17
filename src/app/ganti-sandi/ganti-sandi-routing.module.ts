import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GantiSandiPage } from './ganti-sandi.page';

const routes: Routes = [
  {
    path: '',
    component: GantiSandiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GantiSandiPageRoutingModule {}
