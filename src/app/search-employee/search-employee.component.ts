import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SearchEmployeeService } from './search-employee.service';
@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {
  employees: [];
  minSalary: number;
  maxSalary: number;
  page: number;
  sortColumnName: string;
  sortOrder: string;
  constructor(private searchEmployeeService: SearchEmployeeService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.minSalary = 0;
    this.maxSalary = 0;
    this.page = 0;
    this.sortColumnName = 'id';
    this.sortOrder = '+';
    this.searchEmployee();
  }

  public searchEmployee() {
    this.searchEmployeeService.searchEmployee(
      this.minSalary,
      this.maxSalary,
      this.page,
      this.sortColumnName,
      this.sortOrder
    ).subscribe(data => {
      this.employees = data['results']
      console.log(this.employees);

    });


  }
}
