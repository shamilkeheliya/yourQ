import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { ErrorScreenComponent } from './components/screens/error-screen/error-screen.component';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './components/screens/login-screen/login-screen.component';
import { CreateAccountScreenComponent } from './components/screens/create-account-screen/create-account-screen.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { CreateQuestionnaireScreenComponent } from './components/screens/create-questionnaire-screen/create-questionnaire-screen.component';
import { SingleQuestionnaireScreenComponent } from './components/screens/single-questionnaire-screen/single-questionnaire-screen.component';
import { AnswerQuestionnaireScreenComponent } from './components/screens/answer-questionnaire-screen/answer-questionnaire-screen.component';
import { DashboardScreenComponent } from './components/screens/dashboard-screen/dashboard-screen.component';
import { QuestionnaireIdComponent } from './components/screens/questionnaire-id/questionnaire-id.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CreateAccountScreenComponent,
    AppbarComponent,
    HomeScreenComponent,
    ErrorScreenComponent,
    CreateQuestionnaireScreenComponent,
    SingleQuestionnaireScreenComponent,
    AnswerQuestionnaireScreenComponent,
    DashboardScreenComponent,
    QuestionnaireIdComponent,
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
    ClipboardModule,
    MatTableModule,
    MatListModule,
    MatRadioModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
