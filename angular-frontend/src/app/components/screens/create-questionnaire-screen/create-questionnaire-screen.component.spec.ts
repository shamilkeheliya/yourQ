import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionnaireScreenComponent } from './create-questionnaire-screen.component';
import { FormsModule } from '@angular/forms';

describe('CreateQuestionnaireScreenComponent', () => {
  let component: CreateQuestionnaireScreenComponent;
  let fixture: ComponentFixture<CreateQuestionnaireScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule, HttpClientModule, FormsModule],
      declarations: [ CreateQuestionnaireScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateQuestionnaireScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
