import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';

import { Folder4PageRoutingModule } from './folder4-routing.module';

import { Folder4Page } from './folder4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    Folder4PageRoutingModule
  ],
  declarations: [Folder4Page]
})
export class Folder4PageModule {}
