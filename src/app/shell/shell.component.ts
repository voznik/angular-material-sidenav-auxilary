import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { Logger } from '@shared';
import { NavigationService } from '@shared/navigation.service';

const log = new Logger('Shell');

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements AfterViewInit {
  @ViewChild('endnav') private endnav!: MatSidenav;

  constructor(
    private router: Router,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private breakpoint: BreakpointObserver,
    private navigationService: NavigationService
  ) {
    this.navigationService.getSideRouteNavigationEventStream().subscribe((url) => {
      log.debug(`navigationEnd for ${url} => should toggle side nav`);
      this.endnav.toggle();
    });
  }

  ngAfterViewInit() {
    this.endnav._closedStream.subscribe(() => {
      this.navigationService.navigateToAuxilaryOutlet(null);
    });
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  get isMobile(): boolean {
    return this.breakpoint.isMatched(Breakpoints.Small) || this.breakpoint.isMatched(Breakpoints.XSmall);
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  openSideNav(slug: string | null) {
    log.debug('open side nav', slug);
    return this.navigationService.navigateToAuxilaryOutlet(slug);
  }
}
