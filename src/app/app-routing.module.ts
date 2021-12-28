import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { ConfirmDialogComponent } from './@shared/confirm-dialog/confirm-dialog.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'dialog',
      outlet: 'side',
      loadChildren: () => import('@shared/confirm-dialog/confirm-dialog.module').then((m) => m.ConfirmDialogModule),
    },
    {
      path: 'confirm',
      outlet: 'side',
      loadChildren: () => import('@shared/confirm-dialog/confirm-dialog.module').then((m) => m.ConfirmDialogModule),
    },
    {
      path: 'notifications',
      outlet: 'side',
      loadChildren: () => import('@shared/notifications/notifications.module').then((m) => m.NotificationsModule),
    },
    { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
    { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
  ]),
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
