import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Categories', url: '/folder', icon: 'list' },
    { title: 'Our Cocktails', url: '', icon: 'wine' },
    { title: 'Random Selection', url: '/folder4', icon: 'cloud-download' },
    { title: 'Cart', url: '', icon: 'cart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

