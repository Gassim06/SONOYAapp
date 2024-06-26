import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRecrutPageRoutingModule } from './list-recrut-routing.module';

import { ListRecrutPage } from './list-recrut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRecrutPageRoutingModule
  ],
  declarations: [ListRecrutPage]
})
export class ListRecrutPageModule {}
