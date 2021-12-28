import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { RouterModule } from '@angular/router';
import { ConfirmDialogResolver } from './confirm-dialog.resolver';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ConfirmDialogComponent],
  exports: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmDialogComponent,
        resolve: {
          data: ConfirmDialogResolver,
        },
      },
    ]),
  ],
})
export class ConfirmDialogModule {}
