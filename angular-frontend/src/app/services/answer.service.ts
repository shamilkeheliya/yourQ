import { AnswerModel } from './../models/answers-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    private http: HttpClient,) { }

  async createAnswer(answerModel: AnswerModel){

    return this.http.post(
      environment.env.API_URL + '/answer/create',
      answerModel,
      {
            headers: environment.env.API_HEADER,
            responseType: 'json',
            observe: 'response',
      },
    );
  }
}
