import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardScreenComponent } from './dashboard-screen.component';
import { AppbarComponent } from '../../appbar/appbar.component';
import { MatListModule } from '@angular/material/list';

describe('Dashboard Screen Component', () => {
  let component: DashboardScreenComponent;
  let fixture: ComponentFixture<DashboardScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule, MatListModule],
      declarations: [DashboardScreenComponent , AppbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Dashboard Screen Component should create', () => {
    expect(component).toBeTruthy();
  });
});
