import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {  path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

  {path: 'folder',
  loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
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
  },
  {
    path: 'latest-cocktails',
    loadChildren: () => import('./latest-cocktails/latest-cocktails.module').then( m => m.LatestCocktailsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
