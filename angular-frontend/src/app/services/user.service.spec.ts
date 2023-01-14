import { UserModel } from './../models/user-model';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { of } from 'rxjs';

describe('User Service', () => {

  describe('GET', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let userService: UserService;

    let userName = {firstName: 'Test-First-Name', lastName: 'Test-Last-Name'};

    beforeEach(() => {

      let httpClientSpyObjGet = jasmine.createSpyObj('HttpClient', ['get']);

      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [
          UserService,
          {
            provide: HttpClient,
            useValue: httpClientSpyObjGet,
          },
        ],
      });

      userService = TestBed.inject(UserService);
      httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });

    it('getUserName() should return name of user', async () => {
      httpClientSpy.get.and.returnValue(of(userName));
      (await userService.getUserName()).subscribe({
        next: (data) => {
          expect(data).toEqual(Object(userName));
        },
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });

  });

  describe('POST', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let userService: UserService;

    let userModel = new UserModel;
    userModel.firstName = 'Test-First-Name';
    userModel.lastName = 'Test-Last-Name';
    userModel.email = 'Test-Email';
    userModel.password = '123456';
    let uid = 'test-user-id';


    beforeEach(() => {

      let httpClientSpyObjPost = jasmine.createSpyObj('HttpClient', ['post']);

      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [
          UserService,
          {
            provide: HttpClient,
            useValue: httpClientSpyObjPost,
          },
        ],
      });

      userService = TestBed.inject(UserService);
      httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });

    it('createUser() should return uid of user', async () => {
      httpClientSpy.post.and.returnValue(of(uid));
      (await userService.createUser(userModel)).subscribe({
        next: (data) => {
          expect(data).toEqual(Object(uid));
        },
      });
      expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    });

    it('loginUser() should return uid of user', async () => {
      httpClientSpy.post.and.returnValue(of(uid));
      (await userService.loginUser(userModel)).subscribe({
        next: (data) => {
          expect(data).toEqual(Object(uid));
        },
      });
      expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    });

  });

});




