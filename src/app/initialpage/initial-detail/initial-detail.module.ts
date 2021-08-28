import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitialDetailPageRoutingModule } from './initial-detail-routing.module';

import { InitialDetailPage } from './initial-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitialDetailPageRoutingModule
  ],
  declarations: [InitialDetailPage]
})
export class InitialDetailPageModule {}
