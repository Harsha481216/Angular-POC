import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError,map } from 'rxjs/operators';

import { Employee } from './employee.model'

@Injectable()
export class EmployeeService {
    selectedEmployee: Employee;
    employeeList: Employee[];
    constructor(private http: Http) { }

    postEmployee(emp: Employee) {
        var body = JSON.stringify(emp);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post('http://localhost:63746/api/Employees', body, requestOptions).pipe(map(x => x.json()));
    }

    getEmployeeList() {
        this.http.get('http://localhost:63746/api/Employees')
            .pipe(map((data: Response) => {
                return data.json() as Employee[];
            })).toPromise().then(x => {
                this.employeeList = x;
            })
    }

}