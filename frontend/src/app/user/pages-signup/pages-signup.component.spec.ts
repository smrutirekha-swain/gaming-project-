import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSignupComponent } from './pages-signup.component';

describe('PagesSignupComponent', () => {
  let component: PagesSignupComponent;
  let fixture: ComponentFixture<PagesSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
