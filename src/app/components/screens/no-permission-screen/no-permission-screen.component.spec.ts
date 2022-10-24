import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPermissionScreenComponent } from './no-permission-screen.component';

describe('NoPermissionScreenComponent', () => {
  let component: NoPermissionScreenComponent;
  let fixture: ComponentFixture<NoPermissionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPermissionScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPermissionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
