import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuestionnaireScreenComponent } from './single-questionnaire-screen.component';

describe('SingleQuestionnaireScreenComponent', () => {
  let component: SingleQuestionnaireScreenComponent;
  let fixture: ComponentFixture<SingleQuestionnaireScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleQuestionnaireScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleQuestionnaireScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
