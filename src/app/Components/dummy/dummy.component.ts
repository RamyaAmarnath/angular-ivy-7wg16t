import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "app-dummy",
  templateUrl: "./dummy.component.html",
  styleUrls: ["./dummy.component.css"]
})
export class DummyComponent implements OnInit {
  hello = "hi";
  now = new Date();
  name = "Angular " + VERSION.major;
  constructor() {}

  ngOnInit() {}
  chsngeme() {
    // alert('hi');
    this.hello = "boy";
  }
}
