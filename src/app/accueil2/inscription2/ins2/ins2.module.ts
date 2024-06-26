import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ins2PageRoutingModule } from './ins2-routing.module';

import { Ins2Page } from './ins2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ins2PageRoutingModule
  ],
  declarations: [Ins2Page]
})
export class Ins2PageModule {}
