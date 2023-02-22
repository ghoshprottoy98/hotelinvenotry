import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component'; 
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hotelinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit{

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor(@Host()private roomsService: RoomsService) { }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.employee.empName = 'Rick';
    
  }

}
