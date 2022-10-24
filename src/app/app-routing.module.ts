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

  { path: '**', component: ErrorScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
