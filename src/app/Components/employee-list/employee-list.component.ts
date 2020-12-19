import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../Others/employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employeelist = [];
  constructor(private emp: EmployeeService) {}

  ngOnInit() {
    this.employeelist = this.emp.getAllEmployee();
  }

  view(index: number) {
    // alert(index);
    this.emp.selectedEmployee = index;
  }
}
