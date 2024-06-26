import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsPageRoutingModule } from './ins-routing.module';

import { InsPage } from './ins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsPageRoutingModule
  ],
  declarations: [InsPage]
})
export class InsPageModule {}
