import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent implements OnInit {
  comments = [];
  displayComments = [];
  buttons = [];
  initial = 0;
  end = 10;
  page = 1;
  constructor(private http: HttpClient) {
    this.http
      .get("https://jsonplaceholder.typicode.com/comments")
      .subscribe((data: any) => {
        console.log(data);
        this.comments = data;
        this.filtercomments(1);
        this.generatebuttons();
      });
  }

  ngOnInit() {}
  previous() {
    console.log("previous");
    // this.initial = this.initial - 10;
    // this.end = this.end - 10;
    this.filtercomments(this.page - 1);
  }
  next() {
    console.log("next");
    // this.initial = this.initial + 10;
    // this.end = this.end + 10;
    this.filtercomments(this.page + 1);
  }
  one() {
    console.log("one");
    // this.initial = 0;
    // this.end = 10;
    this.filtercomments(1);
  }
  two() {
    console.log("two");
    // this.initial = 10;
    // this.end = 20;
    this.filtercomments(2);
  }
  three() {
    console.log("three");
    // this.initial = 20;
    // this.end = 30;
    this.filtercomments(3);
  }
  four() {
    console.log("four");
    // this.initial = 30;
    // this.end = 40;
    this.filtercomments(4);
  }
  five() {
    console.log("five");
    // this.initial = 40;
    // this.end = 50;
    this.filtercomments(5);
  }
  changepagelimit() {
    console.log("changepagelimit");
    console.log((event.target as HTMLInputElement).value);
    // todo change pagelimit
    this.one();
  }
  filtercomments(page: number) {
    this.page = page;
    this.initial = (page - 1) * 10;
    this.end = this.initial + 10;
    this.displayComments = this.comments.slice(this.initial, this.end);
    this.generatebuttons();
  }
  generatebuttons() {
    let startbutton = this.page - 2 > 0 ? this.page - 2 : 1;
    let totalbuttons = this.page + 2 <= 50 ? this.page + 2 : 50;
    this.buttons = [];
    for (let i = startbutton; i <= totalbuttons; i++) {
      this.buttons.push(i);
    }
  }
}
