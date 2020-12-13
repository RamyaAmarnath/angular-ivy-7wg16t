import { Component, OnDestroy, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "app-dummy",
  templateUrl: "./dummy.component.html",
  styleUrls: ["./dummy.component.css"]
})
export class DummyComponent implements OnInit, OnDestroy {
  hello = "hi";
  now = new Date();
  name = "Angular " + VERSION.major;
  showme = true;
  cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  chsngeme() {
    // alert('hi');
    this.hello = "boy";
    this.showme = !this.showme;
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
    alert("Your changes will be lost");
  }
}
