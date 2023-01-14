import { HttpClientModule } from '@angular/common/http';
import { AppbarComponent } from './../../appbar/appbar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeScreenComponent } from './home-screen.component';

describe('Home Screen', () => {
  let component: HomeScreenComponent;
  let fixture: ComponentFixture<HomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ HomeScreenComponent , AppbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Home Screen should create', () => {
    expect(component).toBeTruthy();
  });

});
