import { QuestionnaireModel } from './../models/questionnaire-model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { QuestionnaireService } from './questionnaire.service';

describe('Questionnaire Service', () => {

  describe('GET', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let questionnaireService: QuestionnaireService;

    let allQuestionnaires = [
      {_id: 'test-id0', name: 'Test-Questionnaire-Name-0'},
      {_id: 'test-id1', name: 'Test-Questionnaire-Name-1'},
      {_id: 'test-id2', name: 'Test-Questionnaire-Name-2'},
      {_id: 'test-id3', name: 'Test-Questionnaire-Name-3'},
    ];

    let id = 'test-id';
    let singleQuestionnaire = {"_id":{"$oid":"test-id"},"title":"Sample Title","owner":"1234567890","question1":"Sample Question 1","q1a":"Sample Correct Answer","q1w1":"Sample Wrong Answer 1","q1w2":"Sample Wrong Answer 2","q1w3":"Sample Wrong Answer 3","question2":"Sample Question 2","q2a":"Sample Correct Answer","q2w1":"Sample Wrong Answer 1","q2w2":"Sample Wrong Answer 2","q2w3":"Sample Wrong Answer 3","question3":"Sample Question 3","q3a":"Sample Correct Answer","q3w1":"Sample Wrong Answer 1","q3w2":"Sample Wrong Answer 2","q3w3":"Sample Wrong Answer 3","question4":"Sample Question 4","q4a":"Sample Correct Answer","q4w1":"Sample Wrong Answer 1","q4w2":"Sample Wrong Answer 2","q4w3":"Sample Wrong Answer 3","question5":"Sample Question 5","q5a":"Sample Correct Answer","q5w1":"Sample Wrong Answer 1","q5w2":"Sample Wrong Answer 2","q5w3":"Sample Wrong Answer 3","createdAt":{"$date":{"$numberLong":"1673389876018"}},"updatedAt":{"$date":{"$numberLong":"1673389876018"}},"__v":{"$numberInt":"0"}};

    beforeEach(() => {

      let httpClientSpyObjGet = jasmine.createSpyObj('HttpClient', ['get']);

      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [
          QuestionnaireService,
          {
            provide: HttpClient,
            useValue: httpClientSpyObjGet,
          },
        ],
      });

      questionnaireService = TestBed.inject(QuestionnaireService);
      httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });

    it('getAllQuestionnaires() should return name of user', async () => {
      httpClientSpy.get.and.returnValue(of(allQuestionnaires));
      (await questionnaireService.getAllQuestionnaires()).subscribe({
        next: (data) => {
          expect(data).toEqual(Object(allQuestionnaires));
        },
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });

    it('getQuestionnaire() should return name of user', async () => {
      httpClientSpy.get.and.returnValue(of(singleQuestionnaire));
      (await questionnaireService.getQuestionnaire(id)).subscribe({
        next: (data) => {
          expect(data).toEqual(Object(singleQuestionnaire));
        },
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });

  });

  describe('POST', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let questionnaireService: QuestionnaireService;

    let id = 'test-id';

    let questionnaireModel: QuestionnaireModel = {
      title: "test-title",
      owner: "test-questionnaire-owner-id",
      question1: "Sample Question 1", q1a: "Sample Correct Answer", q1w1: "Sample Wrong Answer 1", q1w2: "Sample Wrong Answer 2", q1w3: "Sample Wrong Answer 3",
      question2: "Sample Question 2", q2a: "Sample Correct Answer", q2w1: "Sample Wrong Answer 1", q2w2: "Sample Wrong Answer 2", q2w3: "Sample Wrong Answer 3",
      question3: "Sample Question 3", q3a: "Sample Correct Answer", q3w1: "Sample Wrong Answer 1", q3w2: "Sample Wrong Answer 2", q3w3: "Sample Wrong Answer 3",
      question4: "Sample Question 4", q4a: "Sample Correct Answer", q4w1: "Sample Wrong Answer 1", q4w2: "Sample Wrong Answer 2", q4w3: "Sample Wrong Answer 3",
      question5: "Sample Question 5", q5a: "Sample Correct Answer", q5w1: "Sample Wrong Answer 1", q5w2: "Sample Wrong Answer 2", q5w3: "Sample Wrong Answer 3",
      _id: undefined
    };


    beforeEach(() => {

      let httpClientSpyObjPost = jasmine.createSpyObj('HttpClient', ['post']);

      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [
          QuestionnaireService,
          {
            provide: HttpClient,
            useValue: httpClientSpyObjPost,
          },
        ],
      });

      questionnaireService = TestBed.inject(QuestionnaireService);
      httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });

    it('createQuestionnaire() should return uid of user', async () => {
      httpClientSpy.post.and.returnValue(of(id));
      (await questionnaireService.createQuestionnaire(questionnaireModel)).subscribe({
        next: (data) => {
          expect(data).toEqual(Object(id));
        },
      });
      expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    });

  });

});
