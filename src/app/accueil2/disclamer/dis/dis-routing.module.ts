import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisPage } from './dis.page';

const routes: Routes = [
  {
    path: '',
    component: DisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisPageRoutingModule {}
