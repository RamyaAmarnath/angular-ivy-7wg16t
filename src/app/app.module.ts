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
import { ErrorComponent } from "./Components/error/error.component";
import { PaginationComponent } from "./Components/pagination/pagination.component";
import { EmployeeListComponent } from "./Components/employee-list/employee-list.component";
import { EmployeeDetailComponent } from "./Components/employee-detail/employee-detail.component";
import { EmployeeService } from "./Others/employee.service";
import { HttpClientModule } from "@angular/common/http";
import { TodoComponent } from "./Components/todo/todo.component";
import { AuthGuard } from "./auth.guard";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LanguagePipe,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    DummyComponent,
    ErrorComponent,
    PaginationComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    TodoComponent
  ],
  bootstrap: [AppComponent],
  providers: [EmployeeService, AuthGuard]
})
export class AppModule {}
