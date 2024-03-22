import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesChangepasswordComponent } from './pages-changepassword.component';

describe('PagesChangepasswordComponent', () => {
  let component: PagesChangepasswordComponent;
  let fixture: ComponentFixture<PagesChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesChangepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
