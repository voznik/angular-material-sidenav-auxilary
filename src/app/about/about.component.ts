import { Component } from '@angular/core';
import { environment } from '@env/environment';
import { NavigationService } from '@shared/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  version: string | null = environment.version;

  constructor(private navigationService: NavigationService) {}

  openAuxilary() {
    this.navigationService.navigateToAuxilaryOutlet('dialog');
  }
}
