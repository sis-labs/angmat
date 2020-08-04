import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagerHomePageComponent } from './user-manager-home-page.component';

describe('UserManagerHomePageComponent', () => {
  let component: UserManagerHomePageComponent;
  let fixture: ComponentFixture<UserManagerHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagerHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
