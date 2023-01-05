import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

 async mostrarPop( evento ){
 const popover = await this.popoverCtrl.create({
  component: PopinfoComponent,
  event: evento,
  mode: 'ios',
  backdropDismiss: false //Hace que no se cierre sino tiene una interracion
 });

 await popover.present();

 //const { data } = await popover.onDidDismiss(); // Cuando se cierra la ejecucion aparece el mensaje 
 const { data } = await popover.onWillDismiss(); // Cuando se hace clik aparece el mensaje 

 console.log('Padre', data);
 

  }

}
