import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetospedaPageRoutingModule } from './retospeda-routing.module';

import { RetospedaPage } from './retospeda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetospedaPageRoutingModule
  ],
  declarations: [RetospedaPage]
})
export class RetospedaPageModule {}
