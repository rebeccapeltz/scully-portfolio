import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRootRoutingModule } from './projects-root-routing.module';
import { ProjectsRootComponent } from './projects-root.component';


@NgModule({
  declarations: [ProjectsRootComponent],
  imports: [
    CommonModule,
    ProjectsRootRoutingModule
  ]
})
export class ProjectsRootModule { }


