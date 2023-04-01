import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Grave } from 'src/app/model/Grave.model';
import { GravesService } from 'src/app/services/graves.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {

  @ViewChild('img') img: any;
  grave!: Grave;

  constructor(private graveService: GravesService,
              private router: Router) {
    this.getInfoGrave();
  }

  getInfoGrave() {
    this.graveService.getInfoGrave().subscribe( grave =>  this.grave = grave )
  }
  
  swap(image: any) {
    this.img.src = image.href;
  }
}
