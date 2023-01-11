import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuestionnaireScreenComponent } from './single-questionnaire-screen.component';

describe('SingleQuestionnaireScreenComponent', () => {
  let component: SingleQuestionnaireScreenComponent;
  let fixture: ComponentFixture<SingleQuestionnaireScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
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
