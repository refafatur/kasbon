import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async logout() {
    const confirmAlert = await this.alertController.create({
      header: 'Konfirmasi',
      message: 'Apakah anda ingin logout ?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Konfirmasi dibatalkan');
          }
        },{
          text: 'OK',
          handler: () => {
            console.log('Anda Keluar dari akun');
            this.router.navigate(['/login']);
          }  
        }
      ]
    });
    await confirmAlert.present();
  }

  ganti(){
    this.router.navigate(['/ubah-profil']);
  }

  home(){
    this.router.navigate(['/home']);
  }
}
