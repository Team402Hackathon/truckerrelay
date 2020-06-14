import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { BaselocalService } from '../services/baselocal/baselocal.service';
import { Frete } from '../models/frete.model';

@Component({
  selector: 'app-dados-frete',
  templateUrl: './dados-frete.page.html',
  styleUrls: ['./dados-frete.page.scss'],
})
export class DadosFretePage implements OnInit {

  fretes:Array<Frete> = [
    {
      from: "São Paulo, SP",
      to: "Rio de Janeiro, RJ",
      cash: "R$ 1.500,00",
      time: "6 hrs"
    },
    {
      from: "Holambra, SP",
      to: "São Paulo, SP",
      cash: "R$ 500,00",
      time: "8 hrs"
    },
    {
      from: "São Paulo, SP",
      to: "Paraná, PR",
      cash: "R$ 1.000,00",
      time: "7 hrs"
    },
    {
      from: "Parana, PR",
      to: "Santa Catarina, SC",
      cash: "R$ 1.000,00",
      time: "4 hrs"
    },
    {
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

  aceitarFrete(){
    this.baselocalService.setDados("meufrete", this.fretes[1]).then(async () => {
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
    })
  }

}
