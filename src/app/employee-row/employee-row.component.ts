import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-row',
  templateUrl: './employee-row.component.html',
  styleUrls: ['./employee-row.component.scss']
})
export class EmployeeRowComponent {

  @Input() employee: any;

}
