import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'initialpage',
    children: [
      {
        path: '',
        loadChildren: () => import('./initialpage/initialpage.module').then( m => m.InitialpagePageModule)
      },
    {
      path: ':initialId',
      loadChildren: () => import('./initialpage/initial-detail/initial-detail.module').then( m => m.InitialDetailPageModule)
    }
    ]
  },
  {
    path: 'projects',
    loadChildren: () => import('./initialpage/projects/projects.module').then( m => m.ProjectsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
