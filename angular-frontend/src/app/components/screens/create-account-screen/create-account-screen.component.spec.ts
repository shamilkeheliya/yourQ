import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CreateAccountScreenComponent } from './create-account-screen.component';

describe('CreateAccountScreenComponent', () => {
  let component: CreateAccountScreenComponent;
  let fixture: ComponentFixture<CreateAccountScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule, HttpClientModule, FormsModule],
      declarations: [ CreateAccountScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
