import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Profil', url: '/profil', icon: 'person' },
    { title: 'Notifikasi', url: '/p-keluhan', icon: 'paper-plane' },
    { title: 'Ganti Kata Sandi', url: '/ganti-sandi', icon: 'heart' }
  
  ];
  constructor() {}
}
