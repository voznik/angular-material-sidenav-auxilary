import { ChangeDetectionStrategy, Component, OnInit, Optional } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { Logger } from '@shared/logger.service';

const log = new Logger('Notifications');

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent implements OnInit {
  data?: any;
  selectedDate: Date | null = null;

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'custom-date-class' : '';
    }

    return '';
  };

  constructor(@Optional() public matSidenav: MatSidenav, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({ data }) => {
      this.data = data;
      this.selectedDate = data.selectedDate;
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
