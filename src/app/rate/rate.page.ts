import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import axios from 'axios';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {

  public riwayatkeluhan:any = [];

  public keluhan:any ="";

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
  ngOnInit() {
  }
  home(){
    this.router.navigate(['/home'])
  }
}
