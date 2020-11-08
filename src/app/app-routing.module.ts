import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchEmployeeComponent } from './search-employee/search-employee.component'
import { CreateEmployeesComponent } from './create-employees/create-employees.component'

const routes: Routes = [
  { path: 'searchEmployee', component: SearchEmployeeComponent },
  { path: '', component: CreateEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
