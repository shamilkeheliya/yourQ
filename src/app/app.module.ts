import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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




@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CreateAccountScreenComponent,
    AppbarComponent,
    HomeScreenComponent,
    ErrorScreenComponent,
    NoPermissionScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
