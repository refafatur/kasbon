import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import axios from 'axios';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.page.html',
  styleUrls: ['./tambah.page.scss'],
})
export class TambahPage implements OnInit {
  
  myForm: FormGroup;
  public nis: any = "";
  public password: any = "";
  public nama: any = "";
  public asal_sekolah: any = "";
  public email: any = "";

  constructor(
    public toastCtrl: ToastController,
    public router: Router,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {
    this.myForm = this.formBuilder.group({
      nis: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async konfirmasi() {
    try {
      const formData = new FormData();
      formData.append('nis', this.nis);
      formData.append('password', this.password);
      formData.append('nama', this.nama);
      formData.append('asal_sekolah', this.asal_sekolah);
      formData.append('email', this.email);
  
      // Menampilkan alert konfirmasi
      const confirmAlert = await this.alertController.create({
        header: 'Konfirmasi',
        message: 'Apakah data yang Anda masukkan sudah benar?',
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
              const res = await axios.post('https://praktikum-cpanel-unbin.com/api-kasbon/tambah.php', formData);
              console.log(res.data);
  
              if (res.data.error == false) {
                const toast = await this.toastCtrl.create({
                  message: 'Akun Berhasil ditambahkan',
                  duration: 2000
                });
                this.router.navigate(['/login']);
                toast.present();
              } else {
                const toast = await this.toastCtrl.create({
                  message: 'Gagal Membuat Akun',
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

  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
}
