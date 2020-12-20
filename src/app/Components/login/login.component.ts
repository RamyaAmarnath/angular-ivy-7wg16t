import { Component, OnInit } from "@angular/core";
import { AuthGuard } from "../../auth.guard";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthGuard) {}

  ngOnInit() {}

  login(f: any): void {
    console.log(f);
    if (f.value.username === "Ramya") {
      this.auth.validuser = true;
    }
  }
}
