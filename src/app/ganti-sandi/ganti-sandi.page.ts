import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ganti-sandi',
  templateUrl: './ganti-sandi.page.html',
  styleUrls: ['./ganti-sandi.page.scss'],
})
export class GantiSandiPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  ganti(){
    this.router.navigate(['/home'])
  }
  home(){
    this.router.navigate(['/home'])
  }
}
