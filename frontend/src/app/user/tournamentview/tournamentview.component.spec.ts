import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentviewComponent } from './tournamentview.component';

describe('TournamentviewComponent', () => {
  let component: TournamentviewComponent;
  let fixture: ComponentFixture<TournamentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
