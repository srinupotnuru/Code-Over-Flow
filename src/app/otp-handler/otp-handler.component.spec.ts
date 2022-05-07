import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpHandlerComponent } from './otp-handler.component';

describe('OtpHandlerComponent', () => {
  let component: OtpHandlerComponent;
  let fixture: ComponentFixture<OtpHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
