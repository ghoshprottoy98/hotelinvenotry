import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hotelinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  empName :  string = "John";

  constructor(private roomsService: RoomsService) {

   }


  ngOnInit(): void {

  }

}
