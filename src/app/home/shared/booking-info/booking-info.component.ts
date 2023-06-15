import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Grave } from 'src/app/model/Grave.model';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.scss']
})
export class BookingInfoComponent implements OnInit {

  graveInfo!: Grave;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGraveInfo();
  }

  getGraveInfo() {
    this.activatedRoute.paramMap.pipe(map(() => window.history.state)).subscribe( res => this.graveInfo = res );
  }
}
