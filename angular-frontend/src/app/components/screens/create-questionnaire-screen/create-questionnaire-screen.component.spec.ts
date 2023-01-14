import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionnaireScreenComponent } from './create-questionnaire-screen.component';
import { FormsModule } from '@angular/forms';
import { AppbarComponent } from '../../appbar/appbar.component';

describe('Create Questionnaire Screen', () => {
  let component: CreateQuestionnaireScreenComponent;
  let fixture: ComponentFixture<CreateQuestionnaireScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule, HttpClientModule, FormsModule],
      declarations: [ CreateQuestionnaireScreenComponent , AppbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateQuestionnaireScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Create Questionnaire Screen should create', () => {
    expect(component).toBeTruthy();
  });
});
