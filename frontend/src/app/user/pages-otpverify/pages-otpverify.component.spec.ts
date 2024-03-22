import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesOtpverifyComponent } from './pages-otpverify.component';

describe('PagesOtpverifyComponent', () => {
  let component: PagesOtpverifyComponent;
  let fixture: ComponentFixture<PagesOtpverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesOtpverifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesOtpverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
