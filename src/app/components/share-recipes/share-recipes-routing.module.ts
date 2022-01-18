import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareRecipesPage } from './share-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: ShareRecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareRecipesPageRoutingModule {}
