import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.onReset();
  }
onReset(form?: NgForm) {
  if (form != null) {
form.reset();
this.employeeService.selectedEmployee = {
  employeeId : null,
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  zip: null,
};
  }
}
onSubmit(form) {
  console.log(form);
}
}
