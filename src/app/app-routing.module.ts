import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/Register', pathMatch: 'full' },
    { path: 'Register', component: EmployeeComponent },
    { path: 'EmployeeList', component: EmployeeListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }