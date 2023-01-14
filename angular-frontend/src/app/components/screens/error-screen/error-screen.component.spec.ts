import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorScreenComponent } from './error-screen.component';

describe('Error Screen', () => {
  let component: ErrorScreenComponent;
  let fixture: ComponentFixture<ErrorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Error Screen should create', () => {
    expect(component).toBeTruthy();
  });
});
