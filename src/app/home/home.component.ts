import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private scully: ScullyRoutesService) {}
  projects$: Observable<ScullyRoute[]>;
  mainProjects$: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.projects$ = this.scully.available$.pipe(
      map(routeList => {
        return routeList.filter((route: ScullyRoute) =>
          route.route.startsWith(`/projects/`) && route.hero === false
        );
      })
    );
    this.mainProjects$ = this.scully.available$.pipe(
      map(routeList => {
        return routeList.filter((route: ScullyRoute) =>
          route.route.startsWith(`/projects/`) && route.hero === true
        );
      })
    );
  }

}
