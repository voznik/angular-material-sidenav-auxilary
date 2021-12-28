import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Observable, of } from 'rxjs';
import { ConfirmDialogModel } from './confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogResolver implements Resolve<ConfirmDialogModel> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ConfirmDialogModel> {
    return of({ title: marker('Confirm'), subtitle: '', message: 'ConfirmDialogComponent text from DATA' });
  }
}
