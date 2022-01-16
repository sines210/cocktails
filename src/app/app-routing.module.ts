import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {  path: '',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)},
    
  {path: 'folder/:id',
   redirectTo: 'folder2/:id',
   pathMatch: 'full'},
   
   {path: 'folder2/:id',
    loadChildren: () => import('./folder2/folder2.module').then( m => m.Folder2ComponentModule)
  },

   {path: 'folder3/:id',
    loadChildren: () => import('./folder3/folder3.module').then( m => m.Folder3ComponentModule)
  },
  {
    path: 'modal-cart',
    loadChildren: () => import('./modal-cart/modal-cart.module').then( m => m.ModalCartPageModule)
  },
  {
    path: 'folder4',
    loadChildren: () => import('./folder4/folder4.module').then( m => m.Folder4PageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
