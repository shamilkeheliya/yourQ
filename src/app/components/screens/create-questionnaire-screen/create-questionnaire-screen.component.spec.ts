import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionnaireScreenComponent } from './create-questionnaire-screen.component';

describe('CreateQuestionnaireScreenComponent', () => {
  let component: CreateQuestionnaireScreenComponent;
  let fixture: ComponentFixture<CreateQuestionnaireScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
