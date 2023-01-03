import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerQuestionnaireScreenComponent } from './answer-questionnaire-screen.component';

describe('AnswerQuestionnaireScreenComponent', () => {
  let component: AnswerQuestionnaireScreenComponent;
  let fixture: ComponentFixture<AnswerQuestionnaireScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerQuestionnaireScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerQuestionnaireScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
