import { QuestionnaireModel } from './../../../models/questionnaire-model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-questionnaire-screen',
  templateUrl: './create-questionnaire-screen.component.html',
  styleUrls: ['./create-questionnaire-screen.component.css']
})
export class CreateQuestionnaireScreenComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private questionnaireModel: QuestionnaireModel,
    ) { }

  ngOnInit(): void {
  }

  onClickCreate(form: NgForm){

    // Check Questionnaire Title
    if(form.value.title == ''){
      this.snackBar.open(
        'Questionnaire Title cannot empty!',
        'OK',
        { duration: 2000 },
      );
      return;
    }

    // Check Question 1
    if(
      form.value.question1 == '' ||
      form.value.q1a == '' ||
      form.value.q1w1 == '' ||
      form.value.q1w2 == '' ||
      form.value.q1w3 == ''){
        this.snackBar.open(
          'Question 1 is not complete!',
          'OK',
          { duration: 2000 },
        );
        return;
      }

    // Check Question 2
    if(
      form.value.question2 == '' ||
      form.value.q2a == '' ||
      form.value.q2w1 == '' ||
      form.value.q2w2 == '' ||
      form.value.q2w3 == ''){
        this.snackBar.open(
          'Question 1 is not complete!',
          'OK',
          { duration: 2000 },
        );
        return;
      }

    // Check Question 3
    if(
      form.value.question3 == '' ||
      form.value.q3a == '' ||
      form.value.q3w1 == '' ||
      form.value.q3w2 == '' ||
      form.value.q3w3 == ''){
        this.snackBar.open(
          'Question 1 is not complete!',
          'OK',
          { duration: 2000 },
        );
        return;
      }

    // Check Question 4
    if(
      form.value.question4 == '' ||
      form.value.q4a == '' ||
      form.value.q4w1 == '' ||
      form.value.q4w2 == '' ||
      form.value.q4w3 == ''){
        this.snackBar.open(
          'Question 1 is not complete!',
          'OK',
          { duration: 2000 },
        );
        return;
      }

    // Check Question 5
    if(
      form.value.question5 == '' ||
      form.value.q5a == '' ||
      form.value.q5w1 == '' ||
      form.value.q5w2 == '' ||
      form.value.q5w3 == ''){
        this.snackBar.open(
          'Question 1 is not complete!',
          'OK',
          { duration: 2000 },
        );
        return;
      }

      this.createNewQuestionnaire(form);
  }

  createNewQuestionnaire(form: NgForm){

    this.questionnaireModel.title = form.value.title;

    this.questionnaireModel.question1 = form.value.question1;
    this.questionnaireModel.q1a = form.value.q1a;
    this.questionnaireModel.q1w1 = form.value.q1w1;
    this.questionnaireModel.q1w2 = form.value.q1w2;
    this.questionnaireModel.q1w3 = form.value.q1w3;

    this.questionnaireModel.question2 = form.value.question2;
    this.questionnaireModel.q2a = form.value.q2a;
    this.questionnaireModel.q2w1 = form.value.q2w1;
    this.questionnaireModel.q2w2 = form.value.q2w2;
    this.questionnaireModel.q2w3 = form.value.q2w3;

    this.questionnaireModel.question3 = form.value.question3;
    this.questionnaireModel.q3a = form.value.q3a;
    this.questionnaireModel.q3w1 = form.value.q3w1;
    this.questionnaireModel.q3w2 = form.value.q3w2;
    this.questionnaireModel.q3w3 = form.value.q3w3;

    this.questionnaireModel.question4 = form.value.question4;
    this.questionnaireModel.q4a = form.value.q4a;
    this.questionnaireModel.q4w1 = form.value.q4w1;
    this.questionnaireModel.q4w2 = form.value.q4w2;
    this.questionnaireModel.q4w3 = form.value.q4w3;

    this.questionnaireModel.question5 = form.value.question5;
    this.questionnaireModel.q5a = form.value.q5a;
    this.questionnaireModel.q5w1 = form.value.q5w1;
    this.questionnaireModel.q5w2 = form.value.q5w2;
    this.questionnaireModel.q5w3 = form.value.q5w3;
  }

}
