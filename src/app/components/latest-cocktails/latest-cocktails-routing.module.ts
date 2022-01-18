import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestCocktailsPage } from './latest-cocktails.page';

const routes: Routes = [
  {
    path: '',
    component: LatestCocktailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatestCocktailsPageRoutingModule {}
