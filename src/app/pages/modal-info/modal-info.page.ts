import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  SalirSinArg(){
    this.modalCtrl.dismiss();
  }

  SalirConArg(){
    this.modalCtrl.dismiss({
      nombre: 'Brenda',
      pais: 'Colombia'

    });
  }


}
