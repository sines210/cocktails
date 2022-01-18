import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';

import { RandomListPageRoutingModule } from './random-list-routing.module';

import { RandomListPage } from './random-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomListPageRoutingModule,
    ScrollingModule
  ],
  declarations: [RandomListPage]
})
export class RandomListPageModule {}
