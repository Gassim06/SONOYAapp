import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecrutPageRoutingModule } from './recrut-routing.module';

import { RecrutPage } from './recrut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecrutPageRoutingModule
  ],
  declarations: [RecrutPage]
})
export class RecrutPageModule {}
