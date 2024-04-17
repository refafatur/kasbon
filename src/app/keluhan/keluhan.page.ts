import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import axios from 'axios';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-keluhan',
  templateUrl: './keluhan.page.html',
  styleUrls: ['./keluhan.page.scss'],
})
export class KeluhanPage implements OnInit {
  myForm: FormGroup;
  public keluhan: any = "";

  constructor(
    public toastCtrl: ToastController,
    public router: Router,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {
    this.myForm = this.formBuilder.group({
      keluhan: ['', Validators.required]
    });
  }

  async konfirmasi() {
    try {
      const formData = new FormData();
      formData.append('keluhan', this.keluhan);
  
      // Menampilkan alert konfirmasi
      const confirmAlert = await this.alertController.create({
        header: 'Konfirmasi',
        message: 'Apakah keluhan yang anda masukan sudah benar?',
        buttons: [
          {
            text: 'Batal',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Konfirmasi dibatalkan');
            }
          }, {
            text: 'Ya',
            handler: async () => {
              // Melakukan request dengan data yang dimasukkan jika dikonfirmasi
              const res = await axios.post('https://praktikum-cpanel-unbin.com/api-kasbon/keluhan.php', formData);
              console.log(res.data);
  
              if (res.data.error == false) {
                const toast = await this.toastCtrl.create({
                  message: 'Keluhan Berhasil ditambahkan',
                  duration: 2000
                });
                toast.present();
              } else {
                const toast = await this.toastCtrl.create({
                  message: 'Gagal Membuat Keluhan',
                  duration: 2000
                });
                toast.present();
              }
            }
          }
        ]
      });
  
      await confirmAlert.present();
  
    } catch (err) {
      console.log(err);
    }
  }

  home() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }
}
