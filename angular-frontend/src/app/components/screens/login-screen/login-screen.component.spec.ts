import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppbarComponent } from '../../appbar/appbar.component';

import { LoginScreenComponent } from './login-screen.component';

describe('Login Screen', () => {
  let component: LoginScreenComponent;
  let fixture: ComponentFixture<LoginScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule, HttpClientModule, FormsModule],
      declarations: [ LoginScreenComponent , AppbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Login Screen should create', () => {
    expect(component).toBeTruthy();
  });
});
