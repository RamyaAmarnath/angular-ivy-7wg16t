import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LanguagePipe } from './Others/language.pipe';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DummyComponent } from './Components/dummy/dummy.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LanguagePipe, LoginComponent, NavbarComponent, SignupComponent, DummyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
