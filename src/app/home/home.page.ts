import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  keluhan() {
    this.router.navigate(['/keluhan']);
  }
  pkeluhan() {
    this.router.navigate(['/p-keluhan']);
  }
  rkeluhan() {
    this.router.navigate(['/r-keluhan']);
  }
  rate() {
    this.router.navigate(['/rate']);
  }
}
