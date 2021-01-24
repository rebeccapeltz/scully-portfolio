import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects-root',
  templateUrl: './projects-root.component.html',
  styleUrls: ['./projects-root.component.css']
})
export class ProjectsRootComponent implements OnInit {

  constructor(private scully: ScullyRoutesService) {}
  projects$: Observable<ScullyRoute[]>;
  
  ngOnInit() {
      this.projects$ = this.scully.available$.pipe(
        map(routeList => {
          return routeList.filter((route: ScullyRoute) =>
            route.route.startsWith(`/projects/`)
          );
        })
      );
    }

}
