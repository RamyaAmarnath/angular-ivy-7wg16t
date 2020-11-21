import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LanguagePipe } from "./Others/language.pipe";
import { LoginComponent } from "./Components/login/login.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { SignupComponent } from "./Components/signup/signup.component";
import { DummyComponent } from "./Components/dummy/dummy.component";
import { ErrorComponent } from './Components/error/error.component';
import { PaginationComponent } from './Components/pagination/pagination.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LanguagePipe,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    DummyComponent,
    ErrorComponent,
    PaginationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
