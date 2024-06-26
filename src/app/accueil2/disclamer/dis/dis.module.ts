import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisPageRoutingModule } from './dis-routing.module';

import { DisPage } from './dis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisPageRoutingModule
  ],
  declarations: [DisPage]
})
export class DisPageModule {}
