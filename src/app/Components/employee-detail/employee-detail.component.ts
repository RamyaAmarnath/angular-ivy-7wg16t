import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.css"]
})
export class EmployeeDetailComponent implements OnInit {
  employee = {
    Name: "Ramya",
    Age: 53,
    Email: "ante.blandit@disparturient.ca",
    Street: "493 Iaculis Rd.",
    City: "Lewiston",
    Zip: "42591-180",
    Region: "Maine",
    Country: "Sudan",
    Info: "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
    EmployeeID: 101,
    DateOfJoining: "10/06/2019",
    PhoneNumber: "1628101902299"
  };
  constructor() {}

  ngOnInit() {}
}
