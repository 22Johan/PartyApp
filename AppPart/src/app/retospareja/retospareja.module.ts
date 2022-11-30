import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetosparejaPageRoutingModule } from './retospareja-routing.module';

import { RetosparejaPage } from './retospareja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetosparejaPageRoutingModule
  ],
  declarations: [RetosparejaPage]
})
export class RetosparejaPageModule {}
