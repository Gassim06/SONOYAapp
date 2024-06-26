import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecrutPage } from './recrut.page';

const routes: Routes = [
  {
    path: '',
    component: RecrutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecrutPageRoutingModule {}
