import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupThankyouComponent } from './popup-thankyou.component';

describe('PopupThankyouComponent', () => {
  let component: PopupThankyouComponent;
  let fixture: ComponentFixture<PopupThankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupThankyouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
