import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireIdComponent } from './questionnaire-id.component';

describe('QuestionnaireIdComponent', () => {
  let component: QuestionnaireIdComponent;
  let fixture: ComponentFixture<QuestionnaireIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ QuestionnaireIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
