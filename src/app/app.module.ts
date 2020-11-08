import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EmployeeRowComponent } from './employee-row/employee-row.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CreateEmployeesComponent } from './create-employees/create-employees.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchEmployeeComponent,
    EmployeeRowComponent,
    CreateEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
