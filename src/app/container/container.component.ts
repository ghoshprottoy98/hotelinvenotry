import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component'; 

@Component({
  selector: 'hotelinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit{

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constuctor(): void{ }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.employee.empName = 'Rick';
    
  }

}
