import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ubah-profil',
  templateUrl: './ubah-profil.page.html',
  styleUrls: ['./ubah-profil.page.scss'],
})
export class UbahProfilPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  profil(){
    this.router.navigate(['/profil'])
  }
  ganti(){
    this.router.navigate(['/home'])
  }

}
