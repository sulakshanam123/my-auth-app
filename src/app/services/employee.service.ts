import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = 'http://dummy.restapiexample.com/api/v1/';

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    let url = this.baseUrl + 'employees';
    return this.http.get(url);
  }

  getEmployeeById () {

  }

  updateEmployee() {}

  addCreateEmployee () {}

  deleteRemoveEmployee () {}
}
