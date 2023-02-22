import { Component } from '@angular/core';

@Component({
  selector: 'hotelinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  
  empName: string = 'John';

  constuctor(): void{ }

  ngOnInit(): void {

  }

}
