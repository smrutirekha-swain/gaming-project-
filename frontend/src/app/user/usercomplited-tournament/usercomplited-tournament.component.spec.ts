import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercomplitedTournamentComponent } from './usercomplited-tournament.component';

describe('UsercomplitedTournamentComponent', () => {
  let component: UsercomplitedTournamentComponent;
  let fixture: ComponentFixture<UsercomplitedTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercomplitedTournamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercomplitedTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
