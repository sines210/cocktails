import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Categories', url: '/folder', icon: 'list' },
    { title: 'Latest Cocktails', url: '/latest-cocktails', icon: 'wine' },
    { title: 'Random Selection', url: '/folder4', icon: 'cloud-download' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

