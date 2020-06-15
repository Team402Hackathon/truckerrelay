import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Frete } from '../models/frete.model';
import { BaselocalService } from '../services/baselocal/baselocal.service';

@Component({
  selector: 'app-fretes',
  templateUrl: './fretes.page.html',
  styleUrls: ['./fretes.page.scss'],
})
export class FretesPage implements OnInit {

  fretes:Array<Frete> = [
    {
      indice: 1,
      from: "São Paulo, SP",
      to: "Rio de Janeiro, RJ",
      cash: "R$ 1.500,00",
      time: "6 hrs"
    },
    {
      indice: 2,
      from: "Holambra, SP",
      to: "São Paulo, SP",
      cash: "R$ 500,00",
      time: "8 hrs"
    },
    {
      indice: 3,
      from: "São Paulo, SP",
      to: "Paraná, PR",
      cash: "R$ 1.000,00",
      time: "7 hrs"
    },
    {
      indice: 4,
      from: "Parana, PR",
      to: "Santa Catarina, SC",
      cash: "R$ 1.000,00",
      time: "4 hrs"
    },
    {
      indice: 5,
      from: "Santa Catarina, SC",
      to: "Rio Grande de Sul, RS",
      cash: "R$ 1.000,00",
      time: "9 hrs"
    },
  ]

  constructor(
    private navCtrl:NavController,
    private baselocalService:BaselocalService,
    private alertCtrl:AlertController
  ) { }

  ngOnInit() {
  }

  openDadosFrete(indice:number) {
    console.log(this.fretes[indice])
    this.navCtrl.navigateForward("/dados-frete")
  }

  aceitarFrete(indice:number){
    this.baselocalService.setDados("meufrete", this.fretes[indice]).then(async () => {
      const alert = await this.alertCtrl.create({
        header: 'Novo frete',
        subHeader: 'Parabéns',
        message: 'Você agora tem um novo frete, siga as instruções disponibilizadas na página de dados do frete.;',
        buttons:[
          {
            text: 'Ok',
            role: 'ok',
            handler: () => {
              this.navCtrl.navigateRoot("/meu-frete")
            }
          }
        ]
      });
      alert.present()
      this.openDadosFrete(indice)
    })
  }

}
