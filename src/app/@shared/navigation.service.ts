import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, mapTo, Observable } from 'rxjs';
import { getActivatedRouteByPath, sideRouteMatcher } from './helpers';
import { Logger } from './logger.service';

const log = new Logger('NavigationService');

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  /**
   * If auxilary route is found on page reload
   * (aka 1st navigation id)
   * redirect to this route without auxilary
   */
  initSideRouteRemoveAuxilaryListener() {
    this.router.events
      .pipe(filter((e: Event & any): e is NavigationStart => e instanceof NavigationStart))
      .subscribe((e: NavigationStart) => {
        if (e.id === 1 && sideRouteMatcher(e)) {
          this.router.navigate([e.url.split('(')[0]]);
        }
      });
  }

  /**
   * Get event stream when navigation ends to route wich contains `side` string
   */
  getSideRouteNavigationEventStream(): Observable<any> {
    return this.router.events.pipe(
      filter((event: Event & any) => event instanceof NavigationEnd && sideRouteMatcher(event)),
      mapTo(true)
    );
  }

  /**
   * Navigate to auxilary outlet
   */
  navigateToAuxilaryOutlet(slug: string | null) {
    const parent = getActivatedRouteByPath(this.router.routerState);
    log.debug(
      `navigate to outlet relativeTo path "${parent?.routeConfig?.path}" component "${parent?.routeConfig?.component?.name}"`
    );
    return this.router.navigate(
      [
        {
          outlets: {
            side: slug,
          },
        },
      ],
      {
        relativeTo: parent,
        replaceUrl: true,
      }
    );
  }
}
