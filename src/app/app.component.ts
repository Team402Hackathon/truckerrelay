import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BaselocalService } from './services/baselocal/baselocal.service';
import { Frete } from './models/frete.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Fretes',
      url: '/fretes',
      icon: 'paper-plane'
    },
    {
      title: 'Sair',
      url: '/folder/Favorites',
      icon: 'log-out-outline'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private baselocalService:BaselocalService,
    private router : Router
    ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.baselocalService.getDados('meufrete').then((frete:Frete) => {
      if(frete){
        this.router.navigateByUrl('/meu-frete');
      }
    })
  }
}
