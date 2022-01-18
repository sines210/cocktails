import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareRecipesPageRoutingModule } from './share-recipes-routing.module';

import { ShareRecipesPage } from './share-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareRecipesPageRoutingModule
  ],
  declarations: [ShareRecipesPage]
})
export class ShareRecipesPageModule {}
