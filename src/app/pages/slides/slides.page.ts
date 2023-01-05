import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  ocultar = '';
  slides:{ img: string, titulo: string, desc: string}[] = [
  {
    img: '/assets/slides/1.jpg',
    titulo: 'Computadoras',
    desc: 'Compra increibles computadoras'

  },
  {
    img: '/assets/slides/5.jpg',
    titulo: 'Diviertete',
    desc: 'Visita la ciudad'

  },
  {
    img: '/assets/slides/3.jpg',
    titulo: 'Noche fuera',
    desc: 'Disfruta unas vacaciones'

  },
  {
    img: '/assets/slides/4.gif',
    titulo: 'Saludable',
    desc: 'Come frutas y verduras'

  },

];

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick(){
    this.ocultar = ' animated fadeOut fast'
    this.navCtrl.navigateBack('/');

  }

}
