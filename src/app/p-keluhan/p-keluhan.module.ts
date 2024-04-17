import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PKeluhanPageRoutingModule } from './p-keluhan-routing.module';

import { PKeluhanPage } from './p-keluhan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PKeluhanPageRoutingModule
  ],
  declarations: [PKeluhanPage]
})
export class PKeluhanPageModule {}
