import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeluhanPage } from './keluhan.page';

const routes: Routes = [
  {
    path: '',
    component: KeluhanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeluhanPageRoutingModule {}
