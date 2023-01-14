import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbarComponent } from './appbar.component';

describe('Appbar Component', () => {
  let component: AppbarComponent;
  let fixture: ComponentFixture<AppbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ AppbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Appbar should create', () => {
    expect(component).toBeTruthy();
  });
});
