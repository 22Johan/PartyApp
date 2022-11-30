import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetosparejaPage } from './retospareja.page';

const routes: Routes = [
  {
    path: '',
    component: RetosparejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetosparejaPageRoutingModule {}
