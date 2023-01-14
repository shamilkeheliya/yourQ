import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerQuestionnaireScreenComponent } from './answer-questionnaire-screen.component';
import { AppbarComponent } from '../../appbar/appbar.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

describe('Answer Questionnaire Screen', () => {
  let component: AnswerQuestionnaireScreenComponent;
  let fixture: ComponentFixture<AnswerQuestionnaireScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, MatSnackBarModule, MatRadioModule, MatListModule , FormsModule],
      declarations: [ AnswerQuestionnaireScreenComponent , AppbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerQuestionnaireScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Answer Questionnaire Screen should create', () => {
    expect(component).toBeTruthy();
  });
});
