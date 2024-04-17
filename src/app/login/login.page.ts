import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public nis: any = "";
  public password: any = "";

  constructor(
    public toastCtrl: ToastController,
    public router: Router,
  ) {
  }

  async home() {

    try {

      if (this.nis == '12522033' && this.password == 'rizky') {
        const toast = await this.toastCtrl.create({
          message: 'Login Berhasil',
          duration: 2000
        });
        this.router.navigate(['/home']);
        toast.present();
      } else {
        const toast = await this.toastCtrl.create({
          message: 'Login Gagal',
          duration: 2000
        });
        toast.present();
      }

    } catch (err) {
      console.log(err);
    }
  }

  lupa() {
    this.router.navigate(['/lupa']);
  }
  tambah() {
    this.router.navigate(['/tambah']);
  }
  ngOnInit() {
  }
}