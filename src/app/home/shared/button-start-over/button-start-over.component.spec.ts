import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStartOverComponent } from './button-start-over.component';

describe('ButtonStartOverComponent', () => {
  let component: ButtonStartOverComponent;
  let fixture: ComponentFixture<ButtonStartOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonStartOverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonStartOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
