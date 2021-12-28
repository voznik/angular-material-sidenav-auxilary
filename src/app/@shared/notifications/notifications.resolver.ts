import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return of({
      title: marker('Notifications'),
      subtitle: '',
      selectedDate: new Date(),
    });
  }
}
