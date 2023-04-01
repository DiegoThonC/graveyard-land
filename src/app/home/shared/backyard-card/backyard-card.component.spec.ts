import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackyardCardComponent } from './backyard-card.component';

describe('BackyardCardComponent', () => {
  let component: BackyardCardComponent;
  let fixture: ComponentFixture<BackyardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackyardCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackyardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
