import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { ErrorScreenComponent } from './components/screens/error-screen/error-screen.component';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './components/screens/login-screen/login-screen.component';
import { CreateAccountScreenComponent } from './components/screens/create-account-screen/create-account-screen.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { NoPermissionScreenComponent } from './components/screens/no-permission-screen/no-permission-screen.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CreateQuestionnaireScreenComponent } from './components/screens/create-questionnaire-screen/create-questionnaire-screen.component';
import { AllQuestionnairesScreenComponent } from './components/screens/all-questionnaires-screen/all-questionnaires-screen.component';
import { SingleQuestionnaireScreenComponent } from './components/screens/single-questionnaire-screen/single-questionnaire-screen.component';
import { AnswerQuestionnaireScreenComponent } from './components/screens/answer-questionnaire-screen/answer-questionnaire-screen.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CreateAccountScreenComponent,
    AppbarComponent,
    HomeScreenComponent,
    ErrorScreenComponent,
    NoPermissionScreenComponent,
    CreateQuestionnaireScreenComponent,
    AllQuestionnairesScreenComponent,
    SingleQuestionnaireScreenComponent,
    AnswerQuestionnaireScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class GlobalConsts{
  public static urlAPI = 'http://localhost/5000/api';
  public static headerAPI = new HttpHeaders({
    'API-Key': '!b+6W.$@PKzopN%+6n+6VWT.,_|KzopN%+6W.$@PKzopN%+6n+6V+KzopN%+66@sNL,+iKzopNK+6W.$@PKzopN%+6n+6VzopN%+6%+6VZ*aq1BE6?1f>_f_AaU*VKzopNKzoKzopN%+6pN%+6%+6W.$@PKzopN%+6n+6VZ*aq+6W.$@PKzopN%+6n+6V+6VZ*aq1BE6?1f>_f_AaU*VKzopN1BE6?1f>_f_AaU*VKzopN^',
  });
}
