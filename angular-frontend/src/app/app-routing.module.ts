import { QuestionnaireIdComponent } from './components/screens/questionnaire-id/questionnaire-id.component';
import { DashboardScreenComponent } from './components/screens/dashboard-screen/dashboard-screen.component';
import { AuthGuard } from './auth/auth.guard';
import { SingleQuestionnaireScreenComponent } from './components/screens/single-questionnaire-screen/single-questionnaire-screen.component';
import { AnswerQuestionnaireScreenComponent } from './components/screens/answer-questionnaire-screen/answer-questionnaire-screen.component';
import { CreateQuestionnaireScreenComponent } from './components/screens/create-questionnaire-screen/create-questionnaire-screen.component';
import { CreateAccountScreenComponent } from './components/screens/create-account-screen/create-account-screen.component';
import { LoginScreenComponent } from './components/screens/login-screen/login-screen.component';
import { ErrorScreenComponent } from './components/screens/error-screen/error-screen.component';
import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: HomeScreenComponent },

  { path: 'Login', component: LoginScreenComponent },
  { path: 'Create-Account', component: CreateAccountScreenComponent },

  { path: 'View/:id', component: SingleQuestionnaireScreenComponent, canActivate: [AuthGuard] },
  { path: 'Dashboard', component: DashboardScreenComponent, canActivate: [AuthGuard] },

  { path: 'Create-Questionnaire', component: CreateQuestionnaireScreenComponent, canActivate: [AuthGuard] },
  { path: 'QuestionnaireID/:id', component: QuestionnaireIdComponent, canActivate: [AuthGuard] },
  { path: ':id', component: AnswerQuestionnaireScreenComponent, canActivate: [AuthGuard] },

  { path: '**', component: ErrorScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
