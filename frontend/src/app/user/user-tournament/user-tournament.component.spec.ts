import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTournamentComponent } from './user-tournament.component';

describe('UserTournamentComponent', () => {
  let component: UserTournamentComponent;
  let fixture: ComponentFixture<UserTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTournamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
