import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';

import { LatestCocktailsPageRoutingModule } from './latest-cocktails-routing.module';
import { LatestCocktailsPage } from './latest-cocktails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    LatestCocktailsPageRoutingModule
  ],
  declarations: [LatestCocktailsPage]
})
export class LatestCocktailsPageModule {}


