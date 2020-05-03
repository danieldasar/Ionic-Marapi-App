import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
// import { AccessProviders } from '../providers/access-providers';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.page.html',
  styleUrls: ['./regis.page.scss'],
})
export class RegisPage implements OnInit {

  // nama_user: string = "";
  // username: string = "";
  // alamat: string = "";
  // tgl_lahir: string = "";
  // password: string = "";
  // gender: string = "";
  // confirm_pass: string = "";

  // disabledButton;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    // private accsPrvds: AccessProviders
    ) { }

  ngOnInit() {
  }

  // ionViewDidEnter(){
  //   this.disabledButton = false;
  // }

  login(){
    this.navCtrl.navigateRoot('/');
  }

  // async register(){
  //   if (this.nama_user=="") {
  //     this.presentToast('Masih Kosong, Tolong Diisi');
  //   } else if (this.username=="") {
  //     this.presentToast('Masih Kosong, Tolong Diisi');
  //   } else if (this.gender=="") {
  //     this.presentToast('Masih Kosong, Tolong Diisi');
  //   } else if (this.alamat=="") {
  //     this.presentToast('Masih Kosong, Tolong Diisi');
  //   } else if (this.tgl_lahir=="") {
  //     this.presentToast('Masih Kosong, Tolong Diisi');
  //   } else if (this.password=="") {
  //     this.presentToast('Masih Kosong, Tolong Diisi');
  //   }  else if (this.confirm_pass!=this.password) {
  //     this.presentToast('Password Tidak Sama');
  //   } else {
  //     this.disabledButton = true;
  //     const loader = await this.loadingCtrl.create({
  //       message: 'Tunggu...',
  //     });
  //     loader.present();

  //     return new Promise(resolve => {
  //       let body = {
  //         aksi: 'proses_register',
  //         username: this.username,
  //         gender: this.gender,
  //         alamat: this.alamat,
  //         tgl_lahir: this.tgl_lahir,
  //         password: this.password
  //       }

  //       this.accsPrvds.postData(body, 'proses-api.php').subscribe((res:any)=>{

  //       })

  //     });
  //   }
  // }

  // async presentToast(a){
  //   const toast = await this.toastCtrl.create({
  //     message: a,
  //     duration: 1500,
  //     position:'top'
  //   });
  //   toast.present();
  // }

}
