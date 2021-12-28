import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: marker('Home') } },
  // {
  //   path: 'confirm',
  //   outlet: 'side',
  //   component: HomeComponent,
  //   // loadChildren: () => import('../shell/confirm-dialog/confirm-dialog.module').then((m) => m.ConfirmDialogModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
