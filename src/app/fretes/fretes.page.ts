import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fretes',
  templateUrl: './fretes.page.html',
  styleUrls: ['./fretes.page.scss'],
})
export class FretesPage implements OnInit {

  fretes = [
    {
      from: "São Paulo, SP",
      to: "Rio de Janeiro, RJ",
      cash: "R$ 1.500,00"
    },
    {
      from: "Holambra, SP",
      to: "São Paulo, SP",
      cash: "R$ 500,00"
    },
    {
      from: "São Paulo, SP",
      to: "Paraná, PR",
      cash: "R$ 1.000,00"
    },
    {
      from: "Parana, PR",
      to: "Santa Catarina, SC",
      cash: "R$ 1.000,00"
    },
    {
      from: "Santa Catarina, SC",
      to: "Rio Grande de Sul, RS",
      cash: "R$ 1.000,00"
    },
  ]

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  openDadosFrete() {
    this.navCtrl.navigateForward("/dados-frete")
  }

}
