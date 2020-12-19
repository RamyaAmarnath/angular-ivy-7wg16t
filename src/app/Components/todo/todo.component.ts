import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  // dataurl=https://jsonplaceholder.typicode.com/todos
  constructor(private http: HttpClient) {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos")
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  ngOnInit() {}
}
