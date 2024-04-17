import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeluhanPageRoutingModule } from './keluhan-routing.module';

import { KeluhanPage } from './keluhan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeluhanPageRoutingModule
  ],
  declarations: [KeluhanPage]
})
export class KeluhanPageModule {}
