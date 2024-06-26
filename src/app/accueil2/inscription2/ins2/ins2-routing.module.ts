import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ins2Page } from './ins2.page';

const routes: Routes = [
  {
    path: '',
    component: Ins2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ins2PageRoutingModule {}
