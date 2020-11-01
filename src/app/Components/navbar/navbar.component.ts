import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  changeLanguage(): void {
    console.log(event);
    console.log((event.target as HTMLInputElement).value);
    let language = String(
      (event.target as HTMLInputElement).value
    ).toUpperCase();
    localStorage.setItem("Language", language);
    window.location.reload();
  }
}
