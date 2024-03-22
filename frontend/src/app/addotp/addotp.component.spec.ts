import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddotpComponent } from './addotp.component';

describe('AddotpComponent', () => {
  let component: AddotpComponent;
  let fixture: ComponentFixture<AddotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
