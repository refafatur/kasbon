import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RKeluhanPage } from './r-keluhan.page';

const routes: Routes = [
  {
    path: '',
    component: RKeluhanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RKeluhanPageRoutingModule {}
