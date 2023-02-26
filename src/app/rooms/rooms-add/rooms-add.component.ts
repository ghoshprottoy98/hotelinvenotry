import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Roomlist } from '../rooms';
import { RoomsService } from '../services/rooms.service';


@Component({
  selector: 'hotelinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})

export class RoomsAddComponent implements OnInit {

  room : Roomlist  = 
   {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
    roomNumber: 0,
  }
  
constructor(private roomsService:RoomsService) { }

  successMessage: string = '';

  ngOnInit(): void {
  }

  AddRoom(roomsForm: NgForm){
    this.roomsService
    .addRoom(this.room)
    .subscribe((data)=>{
      this.successMessage = "Room addded successfully!";
      roomsForm.reset();
    })
  }

}
