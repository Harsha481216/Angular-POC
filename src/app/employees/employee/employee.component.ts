import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { EmployeeService } from '../shared/employee.service'
@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css'],
    providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
    submitted: boolean = false;
    maxDate: Date;
    message: string = '';
    constructor(private employeeService: EmployeeService) {
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate());
    }

    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null)
            form.reset();
        this.employeeService.selectedEmployee = {
            EmployeeID: null,
            FirstName: '',
            LastName: '',
            department: '',
            dateOfBirth: '',
            mobileNumber: '',
            addressField:''
        }
    }

    onSubmit(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.employeeService.postEmployee(form.value)
                .subscribe(data => {
                    this.message = "Added Employee " + form.controls.FirstName.value;
                    this.resetForm(form);
                    this.employeeService.getEmployeeList();
                })
            this.submitted = false;
        }
        //else { this.resetForm(form)}
    }
}
