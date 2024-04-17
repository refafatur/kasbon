import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GantiSandiPageRoutingModule } from './ganti-sandi-routing.module';

import { GantiSandiPage } from './ganti-sandi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GantiSandiPageRoutingModule
  ],
  declarations: [GantiSandiPage]
})
export class GantiSandiPageModule {}
