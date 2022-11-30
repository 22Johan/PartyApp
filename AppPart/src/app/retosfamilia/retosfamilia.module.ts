import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetosfamiliaPageRoutingModule } from './retosfamilia-routing.module';

import { RetosfamiliaPage } from './retosfamilia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetosfamiliaPageRoutingModule
  ],
  declarations: [RetosfamiliaPage]
})
export class RetosfamiliaPageModule {}
