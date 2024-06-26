import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRecrutPage } from './list-recrut.page';

const routes: Routes = [
  {
    path: '',
    component: ListRecrutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRecrutPageRoutingModule {}
