import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {  path: '',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)},

  {path: 'folder',
  loadChildren: () => import('./components/folder/folder.module').then( m => m.FolderPageModule)
  },
   {path: 'folder2/:id',
    loadChildren: () => import('./components/folder2/folder2.module').then( m => m.Folder2ComponentModule)
  },

   {path: 'folder3/:id',
    loadChildren: () => import('./components/folder3/folder3.module').then( m => m.Folder3ComponentModule)
  },
  {
    path: 'modal-cart',
    loadChildren: () => import('./components/modal-cart/modal-cart.module').then( m => m.ModalCartPageModule)
  },
  {
    path: 'folder4',
    loadChildren: () => import('./components/folder4/folder4.module').then( m => m.Folder4PageModule)
  },
  {
    path: 'latest-cocktails',
    loadChildren: () => import('./components/latest-cocktails/latest-cocktails.module').then( m => m.LatestCocktailsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'share-recipes',
    loadChildren: () => import('./components/share-recipes/share-recipes.module').then( m => m.ShareRecipesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
