import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  VERSION
} from "@angular/core";

@Component({
  selector: "app-dummy",
  templateUrl: "./dummy.component.html",
  styleUrls: ["./dummy.component.css"]
})
export class DummyComponent
  implements
    OnInit,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  hello = "hi";
  now = new Date();
  name = "Angular " + VERSION.major;
  showme = true;
  cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  count=0;
  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  chsngeme() {
    // alert('hi');
    this.hello = "boy";
    this.showme = !this.showme;
  }
  keytriggered(){
    this.count++;
    console.log(this.count);
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
    alert("Your changes will be lost");
  }
}
