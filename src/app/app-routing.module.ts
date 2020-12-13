import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { SignupComponent } from "./Components/signup/signup.component";
import { DummyComponent } from "./Components/dummy/dummy.component";
import { ErrorComponent } from "./Components/error/error.component";
import { PaginationComponent } from "./Components/pagination/pagination.component";
import { EmployeeDetailComponent } from "./Components/employee-detail/employee-detail.component";
import { EmployeeListComponent } from "./Components/employee-list/employee-list.component";
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "dummy", component: DummyComponent },
  { path: "error", component: ErrorComponent },
  { path: "pagination", component: PaginationComponent },
  { path: "employee-list", component: EmployeeListComponent },
  { path: "employee-detail", component: EmployeeDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
