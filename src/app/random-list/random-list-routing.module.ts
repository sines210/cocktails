import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomListPage } from './random-list.page';

const routes: Routes = [
  {
    path: '',
    component: RandomListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomListPageRoutingModule {}
