import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('./toc/toc.module').then(m => m.TocPageModule)
  },
  { path: 'toc', loadChildren: './toc/toc.module#TocPageModule' },
  { path: 'chapter1', loadChildren: './chapter1/chapter1.module#Chapter1PageModule' },
  { path: 'chapter2', loadChildren: './chapter2/chapter2.module#Chapter2PageModule' },
  { path: 'chapter3', loadChildren: './chapter3/chapter3.module#Chapter3PageModule' },
  { path: 'chapter4', loadChildren: './chapter4/chapter4.module#Chapter4PageModule' },
  { path: 'chapter5', loadChildren: './chapter5/chapter5.module#Chapter5PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
