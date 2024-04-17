import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RKeluhanPageRoutingModule } from './r-keluhan-routing.module';

import { RKeluhanPage } from './r-keluhan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RKeluhanPageRoutingModule
  ],
  declarations: [RKeluhanPage]
})
export class RKeluhanPageModule {}
