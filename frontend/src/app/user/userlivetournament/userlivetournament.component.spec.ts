import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlivetournamentComponent } from './userlivetournament.component';

describe('UserlivetournamentComponent', () => {
  let component: UserlivetournamentComponent;
  let fixture: ComponentFixture<UserlivetournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlivetournamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlivetournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
