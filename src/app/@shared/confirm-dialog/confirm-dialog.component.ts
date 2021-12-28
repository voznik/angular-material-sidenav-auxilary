import { Component, OnInit, Optional } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { Logger } from '@shared';

const log = new Logger('ConfirmDialog');

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  data?: ConfirmDialogModel;

  constructor(@Optional() public matSidenav: MatSidenav, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({ data }) => {
      this.data = data;
    });
  }

  ngOnInit() {
    log.debug('init', this.data, this.matSidenav);
  }

  onConfirm(): void {
    this.matSidenav.close(/* true */);
  }

  onDismiss(): void {
    this.matSidenav.close();
  }
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class ConfirmDialogModel {
  constructor(public title: string, public subtitle: string, public message: string) {}
}
