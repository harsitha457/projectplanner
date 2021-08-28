import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialpagePage } from './initialpage.page';

const routes: Routes = [
  {
    path: '',
    component: InitialpagePage
  },
  {
    path: 'initial-detail',
    loadChildren: () => import('./initial-detail/initial-detail.module').then( m => m.InitialDetailPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitialpagePageRoutingModule {}
