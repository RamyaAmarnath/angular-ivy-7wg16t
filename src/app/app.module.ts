import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LanguagePipe } from './Others/language.pipe';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LanguagePipe, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
