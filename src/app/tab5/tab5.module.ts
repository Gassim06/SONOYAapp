import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';
import { RecrutComponent } from '../recrut/recrut.component';
import { ListRecrutPage } from '../offre/liseRecrut/list-recrut/list-recrut.page';
import { ListjobComponent } from '../listjob/listjob.component';
import { SearchjobComponent } from '../searchjob/searchjob.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule
    
  ],
  declarations: [
    Tab5Page,
    RecrutComponent,
    ListjobComponent,
    SearchjobComponent
  ]
})
export class Tab5PageModule {}
