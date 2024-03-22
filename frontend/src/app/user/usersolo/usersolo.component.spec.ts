import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersoloComponent } from './usersolo.component';

describe('UsersoloComponent', () => {
  let component: UsersoloComponent;
  let fixture: ComponentFixture<UsersoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
