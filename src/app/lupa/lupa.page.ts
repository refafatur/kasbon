import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lupa',
  templateUrl: './lupa.page.html',
  styleUrls: ['./lupa.page.scss'],
})
export class LupaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login() {
    this.router.navigate(['/login']);
  }
  kembali(){
    this.router.navigate(['/login'])
  }
}
