import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dummy",
  templateUrl: "./dummy.component.html",
  styleUrls: ["./dummy.component.css"]
})
export class DummyComponent implements OnInit {
  hello = "hi";
  constructor() {}

  ngOnInit() {}
  chsngeme() {
    // alert('hi');
    this.hello = "boy";
  }
}
