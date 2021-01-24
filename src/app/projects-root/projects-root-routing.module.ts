import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsRootComponent } from './projects-root.component';

const routes: Routes = [{ path: '', component: ProjectsRootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRootRoutingModule { }
