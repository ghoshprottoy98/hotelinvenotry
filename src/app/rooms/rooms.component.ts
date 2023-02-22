import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
  selector: 'hotelinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit {

  hotelname = 'Hilton Hotel';

  numberOfRooms =10;

  hideRooms= false;

  constuctor(): void {}

  ngOnInit(): void{}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
