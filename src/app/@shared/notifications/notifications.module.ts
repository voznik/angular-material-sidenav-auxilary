import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications.component';
import { NotificationsResolver } from './notifications.resolver';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotificationsComponent,
        resolve: {
          data: NotificationsResolver,
        },
      },
    ]),
  ],
  exports: [],
  providers: [],
})
export class NotificationsModule {}
