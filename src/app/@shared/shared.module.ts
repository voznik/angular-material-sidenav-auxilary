import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    NotificationsComponent,
  ],
  exports: [
    LoaderComponent,
  ]
})
export class SharedModule { }
