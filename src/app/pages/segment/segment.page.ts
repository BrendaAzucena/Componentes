import { Component, OnInit, ViewChild} from '@angular/core';
//import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  //@ViewChild(IonSegment) segment: IonSegment;

 superHeroes: Observable<any>;
 publicsher = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
   // this.segment.value = 'todos'; arreglar 
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event){
    
    const valorSegmento = event.detail.value;

    if (valorSegmento === 'todos'){
      this.publicsher = '';
      return;

    }

    this.publicsher = valorSegmento;

    console.log(valorSegmento);
    
  }

}
