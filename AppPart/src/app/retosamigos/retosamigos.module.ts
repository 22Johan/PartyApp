import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetosamigosPageRoutingModule } from './retosamigos-routing.module';

import { RetosamigosPage } from './retosamigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetosamigosPageRoutingModule
  ],
  declarations: [RetosamigosPage]
})
export class RetosamigosPageModule {}
