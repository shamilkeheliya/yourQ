import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireIdComponent } from './questionnaire-id.component';
import { AppbarComponent } from '../../appbar/appbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';

describe('Questionnaire Id Component', () => {
  let component: QuestionnaireIdComponent;
  let fixture: ComponentFixture<QuestionnaireIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule , HttpClientModule, FormsModule, ClipboardModule],
      declarations: [ QuestionnaireIdComponent , AppbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Questionnaire Id Component should create', () => {
    expect(component).toBeTruthy();
  });
});
