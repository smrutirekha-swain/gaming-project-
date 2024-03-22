import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingStatusComponent } from './gaming-status.component';

describe('GamingStatusComponent', () => {
  let component: GamingStatusComponent;
  let fixture: ComponentFixture<GamingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
