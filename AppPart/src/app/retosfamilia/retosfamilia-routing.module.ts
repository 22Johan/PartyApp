import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetosfamiliaPage } from './retosfamilia.page';

const routes: Routes = [
  {
    path: '',
    component: RetosfamiliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetosfamiliaPageRoutingModule {}
