import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchEmployeeComponent } from './search-employee/search-employee.component'

const routes: Routes = [
  { path: 'searchEmployee', component: SearchEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
