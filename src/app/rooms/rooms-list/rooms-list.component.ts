import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Roomlist } from '../rooms';

@Component({
  selector: 'hotelinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})

export class RoomsListComponent implements OnInit{


  @Input() rooms: Roomlist[] = [];

  @Input() title:string = ' ';


  @Output() selectedRoom= new EventEmitter<Roomlist>();


  constructor() {}

  ngOnInit(): void{}

  selectRoom(room: Roomlist) {
    this.selectedRoom.emit(room);
  }


}
