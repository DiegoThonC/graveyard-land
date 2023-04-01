import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurialSpotsComponent } from './burial-spots.component';

describe('BurialSpotsComponent', () => {
  let component: BurialSpotsComponent;
  let fixture: ComponentFixture<BurialSpotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurialSpotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurialSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
