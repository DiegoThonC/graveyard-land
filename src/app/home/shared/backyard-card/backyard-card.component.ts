import { Component, OnInit } from '@angular/core';
import { Grave } from 'src/app/model/Grave.model';
import { GravesService } from 'src/app/services/graves.service';

@Component({
  selector: 'app-backyard-card',
  templateUrl: './backyard-card.component.html',
  styleUrls: ['./backyard-card.component.scss']
})
export class BackyardCardComponent implements OnInit {
  
  graves: Grave[] = [];

  constructor(private graveService: GravesService) { }

  ngOnInit(): void {
    this.graveService.getGraves().subscribe( resp => this.graves = resp );
    // this.graveService.addGraves();
  }

  sendGraveObj(objectGrave: Grave) {
    this.graveService.setInfoGrave(objectGrave);
  }

}
