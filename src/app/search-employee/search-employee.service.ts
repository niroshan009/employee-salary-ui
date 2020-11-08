import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchEmployeeService {

  constructor(private httpService: HttpClient) { }

  public searchEmployee(minSalary: number, maxSalary: number, page: number, sortColumnName: string, sortOrder: string) {
    let path = 'http://localhost:8080/users?minSalary=' + minSalary + '&maxSalary=' + maxSalary + '&offset=' + page + '&limit=30&sort=' + sortOrder + sortColumnName;
    return this.httpService.get(path);
  }
}
