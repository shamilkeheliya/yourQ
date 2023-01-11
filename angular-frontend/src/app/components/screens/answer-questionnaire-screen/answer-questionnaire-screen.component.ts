import { AnswerModel } from './../../../models/answers-model';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionnaireService } from './../../../services/questionnaire.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-answer-questionnaire-screen',
  templateUrl: './answer-questionnaire-screen.component.html',
  styleUrls: ['./answer-questionnaire-screen.component.css'],
  providers: [AnswerModel]
})
export class AnswerQuestionnaireScreenComponent implements OnInit {
  questionnaireData: any = '';
  marks: number = 0;

  answers1: string[] = [];
  answers2: string[] = [];
  answers3: string[] = [];
  answers4: string[] = [];
  answers5: string[] = [];

  givenAnswer1: string = "";
  givenAnswer2: string = "";
  givenAnswer3: string = "";
  givenAnswer4: string = "";
  givenAnswer5: string = "";

  constructor(
    private route: ActivatedRoute,
    private questionnaireService: QuestionnaireService,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private answerService: AnswerService,
    private answerModel: AnswerModel,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){

    (await this.questionnaireService.getQuestionnaire(this.route.snapshot.paramMap.get('id')!)).subscribe((response) => {

      if (response.status == 200) {

        this.questionnaireData = response.body;

        //console.log(this.questionnaireData['_id']);

        this.setQuestionniar();
        return;

      }
      else{
        this.snackBar.open(
          'Connot get Questionnaire!',
          'OK',
          { duration: 2000 }
        );
        return;
      }

    });

  }

  setQuestionniar(){
    this.answers1?.push(this.questionnaireData['q1a']);
    this.answers1?.push(this.questionnaireData['q1w1']);
    this.answers1?.push(this.questionnaireData['q1w2']);
    this.answers1?.push(this.questionnaireData['q1w3']);
    this.answers1 = this.shuffleAnswers(this.answers1);

    this.answers2?.push(this.questionnaireData['q2a']);
    this.answers2?.push(this.questionnaireData['q2w1']);
    this.answers2?.push(this.questionnaireData['q2w2']);
    this.answers2?.push(this.questionnaireData['q2w3']);
    this.answers2 = this.shuffleAnswers(this.answers2);

    this.answers3?.push(this.questionnaireData['q3a']);
    this.answers3?.push(this.questionnaireData['q3w1']);
    this.answers3?.push(this.questionnaireData['q3w2']);
    this.answers3?.push(this.questionnaireData['q3w3']);
    this.answers3 = this.shuffleAnswers(this.answers3);

    this.answers4?.push(this.questionnaireData['q4a']);
    this.answers4?.push(this.questionnaireData['q4w1']);
    this.answers4?.push(this.questionnaireData['q4w2']);
    this.answers4?.push(this.questionnaireData['q4w3']);
    this.answers4 = this.shuffleAnswers(this.answers4);

    this.answers5?.push(this.questionnaireData['q5a']);
    this.answers5?.push(this.questionnaireData['q5w1']);
    this.answers5?.push(this.questionnaireData['q5w2']);
    this.answers5?.push(this.questionnaireData['q5w3']);
    this.answers5 = this.shuffleAnswers(this.answers5);
  }

  shuffleAnswers(array: any) {
    var m = array.length, t, i;

    while (m) {
     i = Math.floor(Math.random() * m--);
     t = array[m];
     array[m] = array[i];
     array[i] = t;
    }

   return array;
  }

  async onClickSubmit(){
    if(this.givenAnswer1 == "" || this.givenAnswer2 == "" || this.givenAnswer3 == "" || this.givenAnswer4 == "" || this.givenAnswer5 == ""){
      this.snackBar.open(
        'Answer all Questions!',
        'OK',
        { duration: 2000 }
      );
      return;
    }

    (await this.userService.getUserName()).subscribe((response) => {

      if (response.status == 200) {

        const name: any = response.body;
        const answererName = name?.firstName + ' ' + name?.lastName;

        this.submitAnswer(answererName);

      }
      else{
        this.snackBar.open(
          'Connot User Name',
          'OK',
          { duration: 2000 }
        );

        return;
      }

    });


  }

  async submitAnswer(answererName: string){

    if(this.givenAnswer1 == this.questionnaireData['q1a']){
      this.marks++;
    }

    if(this.givenAnswer2 == this.questionnaireData['q2a']){
      this.marks++;
    }

    if(this.givenAnswer3 == this.questionnaireData['q3a']){
      this.marks++;
    }

    if(this.givenAnswer4 == this.questionnaireData['q4a']){
      this.marks++;
    }

    if(this.givenAnswer5 == this.questionnaireData['q5a']){
      this.marks++;
    }

    this.answerModel.questionnaire = this.questionnaireData['_id'];
    this.answerModel.answerer = this.userService.getUserID();
    this.answerModel.answererName = answererName;
    this.answerModel.marks = this.marks*20;

    (await this.answerService.createAnswer(this.answerModel)).subscribe((response) => {

      if (response.status == 200) {
        this.snackBar.open(
          'Your answer submitted Successfully!',
          'OK',
          { duration: 2000 }
        );

        this.router.navigate(['/Dashboard']);

        return;
      }
      else{
        this.snackBar.open(
          'Cannot submit your answer!',
          'OK',
          { duration: 2000 }
        );
      }

    });

  }

}
