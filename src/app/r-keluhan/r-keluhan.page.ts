import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-r-keluhan',
  templateUrl: './r-keluhan.page.html',
  styleUrls: ['./r-keluhan.page.scss'],
})
export class RKeluhanPage implements OnInit {

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1000);
  }

  public riwayatkeluhan:any = [];

  public keluhan:any ="";
  public waktu:any="";

  constructor(
    private router: Router,
    public modalCtrl: ModalController,
  ) {
    this.getData();
  }
  async getData() {
    try {
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api-kasbon/riwayat_keluhan.php');
      this.riwayatkeluhan = res.data.result;
      console.log(this.riwayatkeluhan);
  
      }catch(err){
        console.log(err);
      }
    }

    async deletekeluhan(keluhan:any) { 
      const fd = new FormData();
      fd.append('keluhan', keluhan);
      try{
        const res = await axios.post('https://praktikum-cpanel-unbin.com/api-kasbon/delete_keluhan.php', fd);
        if(res.data.success == false) {
          alert('Gagal menghapus data');
        }else{
          alert('Berhasil menghapus Data');
          this.getData();
        }
      }catch(err){
        console.log(err);
      }
    }

  ngOnInit() {
  }
  home() {
    this.router.navigate(['/home']);
  }
}
