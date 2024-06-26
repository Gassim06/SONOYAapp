import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsPage } from './ins.page';

const routes: Routes = [
  {
    path: '',
    component: InsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsPageRoutingModule {}
