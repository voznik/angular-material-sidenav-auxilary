import { NavigationStart, NavigationEnd, RouterState } from '@angular/router';

export function sideRouteMatcher(ev: NavigationStart | NavigationEnd) {
  return !!(ev.url.match(/\(side:/) || ev.url.match(/\/\/side:/));
}

export function getActivatedRouteByPath(routerState: RouterState, path = 'app') {
  return routerState.root.children.find((r) => r.routeConfig?.path === path);
}
