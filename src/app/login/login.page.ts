import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {  

  constructor(
    public navCtrl: NavController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateRoot('/home');
  }

  signUp(){
    // this.navCtrl.navigateRoot('/regis');
    this.router.navigate(['/regis']);
  }



}
