import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { IonicModule } from '@ionic/angular';

import { Folder2ComponentRoutingModule } from './folder2-routing.module';

import { Folder2Component } from './folder2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Folder2ComponentRoutingModule,
    ScrollingModule
  ],
  declarations: [Folder2Component]
})
export class Folder2ComponentModule {}
