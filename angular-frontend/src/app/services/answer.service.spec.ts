import { AnswerModel } from './../models/answers-model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AnswerService } from './answer.service';

describe('Answer Service', () => {
  describe('POST', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let answerService: AnswerService;

    let id = 'test-id';

    let answerModel: AnswerModel = {
      _id: undefined,
      questionnaire: 'test-questionnaire-id',
      answerer: 'test-answerer-id',
      answererName: 'test-answerer-name',
      marks: 100
    };


    beforeEach(() => {

      let httpClientSpyObjPost = jasmine.createSpyObj('HttpClient', ['post']);

      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [
          AnswerService,
          {
            provide: HttpClient,
            useValue: httpClientSpyObjPost,
          },
        ],
      });

      answerService = TestBed.inject(AnswerService);
      httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });

    it('createQuestionnaire() should return uid of user', async () => {
      httpClientSpy.post.and.returnValue(of(id));
      (await answerService.createAnswer(answerModel)).subscribe({
        next: (data) => {
          expect(data).toEqual(Object(id));
        },
      });
      expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    });

  });
});
