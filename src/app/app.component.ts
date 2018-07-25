import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'app-app', // <app-app></app-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/steelx';
  title: string;

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }
}
