import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PKeluhanPage } from './p-keluhan.page';

const routes: Routes = [
  {
    path: '',
    component: PKeluhanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PKeluhanPageRoutingModule {}
