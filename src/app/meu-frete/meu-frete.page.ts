import { Component, OnInit } from '@angular/core';
import { BaselocalService } from '../services/baselocal/baselocal.service';
import { Frete } from '../models/frete.model';
import { LoadingController, IonSlides, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-meu-frete',
  templateUrl: './meu-frete.page.html',
  styleUrls: ['./meu-frete.page.scss'],
})
export class MeuFretePage implements OnInit {

  frete:Frete

  constructor(
    private baselocalService:BaselocalService,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private navCtrl:NavController
  ) { }

  async ngOnInit() {
    let loading = await this.presentLoading()
    loading.present()
    this.baselocalService.getDados("meufrete").then((frete:Frete) => {
      this.frete = frete
      loading.dismiss()
    })
  }

  async trocarMotorista() {
    const numero = await this.numeroAleatorio()
    const alert = await this.alertCtrl.create({
      header: 'Novo motorista',
      subHeader: 'Informe o número ao novo motorista',
      message: numero,
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Informado',
          handler: () => {
            this.baselocalService.deleteDados("meufrete")
            this.navCtrl.navigateRoot("/fretes")
          }
        }
      ]
    });
    alert.present()
  }

  async numeroAleatorio(max = 6) {
    let numero:string = ""
    for (let index = 0; index < max; index++) {
      numero = numero + Math.floor(Math.random() * max + 1).toString()
    }
    return numero
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    return loading
  }
}
