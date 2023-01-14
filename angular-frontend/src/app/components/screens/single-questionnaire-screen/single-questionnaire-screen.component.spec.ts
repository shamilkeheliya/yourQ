import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuestionnaireScreenComponent } from './single-questionnaire-screen.component';
import { AppbarComponent } from '../../appbar/appbar.component';

describe('Single Questionnaire Screen', () => {
  let component: SingleQuestionnaireScreenComponent;
  let fixture: ComponentFixture<SingleQuestionnaireScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ SingleQuestionnaireScreenComponent , AppbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleQuestionnaireScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Single Questionnaire Screen should create', () => {
    expect(component).toBeTruthy();
  });
});
