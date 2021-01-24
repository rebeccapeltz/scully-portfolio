import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: ':project',
    component: ProjectsComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('../projects-root/projects-root.module').then(
        (m) => m.ProjectsRootModule
      ),
  },
  {
    path: '**',
    component: ProjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
