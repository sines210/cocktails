import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Folder3Component } from './folder3.component';

const routes: Routes = [
  {
    path: '',
    component: Folder3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Folder3ComponentRoutingModule {}
