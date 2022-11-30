import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetospedaPage } from './retospeda.page';

const routes: Routes = [
  {
    path: '',
    component: RetospedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetospedaPageRoutingModule {}
