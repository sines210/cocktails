import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';

import { Folder3ComponentRoutingModule } from './folder3-routing.module';

import { Folder3Component } from './folder3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Folder3ComponentRoutingModule,
    ScrollingModule
  ],
  declarations: [Folder3Component]
})
export class Folder3ComponentModule {}
