import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Folder4Page } from './folder4.page';

const routes: Routes = [
  {
    path: '',
    component: Folder4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Folder4PageRoutingModule {}
