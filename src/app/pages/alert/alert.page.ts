import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  @Input() titulo: string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
      },
      {
        text: 'Ok',
        handler: (blah) => {
          console.log('Boton OK');
        }
      }
    ]
    });

    await alert.present();
  }

  async alertInput() {
    const alert = await this.alertCtrl.create({
        header: 'Input',
        inputs: [
          {
            name: 'name',
            type: 'text',
            placeholder: 'Nombre'
          }],
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }, {
              text: 'OK',
              handler: ( data ) => {
                console.log('Confirm Ok');
                this.titulo = data.name;
              }
            }
          ]
        });
      await alert.present();
    }
  
}

