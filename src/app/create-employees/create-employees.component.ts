import { Component, OnInit } from '@angular/core';
import { CreateEmployeeService } from './create-employee.service';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.scss']
})


export class CreateEmployeesComponent implements OnInit {

  fileList: FileList;
  isSaving: boolean;
  saveError: boolean;
  saveSuccess: boolean;

  constructor(private createEmployeeService: CreateEmployeeService) { }

  ngOnInit(): void {
    this.isSaving = false;
    this.saveError = false;
    this.saveSuccess = false;
  }



  fileChange(event) {
    this.fileList = event.target.files;
    this.isSaving = true
    this.saveError = false;
    this.saveSuccess = false;
    if (this.fileList.length > 0) {
      let file: File = this.fileList[0];
      this.createEmployeeService.saveEmployees(file).subscribe(
        data => {
          this.isSaving = false;
          this.saveSuccess = true;
          this.clearData();
        },
        error => {
          this.isSaving = false;
          this.saveError = true;
          this.clearData();
        }
      );
    }
  }

  private clearData() {
    this.fileList = null;
  }

}
