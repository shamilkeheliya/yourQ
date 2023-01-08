import { AuthService } from './auth.service';
import { QuestionnaireModel } from './../models/questionnaire-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  async createQuestionnaire(questionnaireModel: QuestionnaireModel){

    return this.http.post(
      environment.env.API_URL + '/questionnaire/create',
      questionnaireModel,
      {
            headers: environment.env.API_HEADER,
            responseType: 'json',
            observe: 'response',
      },
    );
  }

  async getAllQuestionnaires(){

    return this.http.get(
      environment.env.API_URL + '/questionnaire/all/' + this.authService.getUserID(),
      {
        headers: environment.env.API_HEADER,
        responseType: 'json',
        observe: 'response',
      },
    );
  }

  async getQuestionnaire(id: string){

    return this.http.get(
      environment.env.API_URL + '/questionnaire/' + id,
      {
        headers: environment.env.API_HEADER,
        responseType: 'json',
        observe: 'response',
      },
    );
  }
}
