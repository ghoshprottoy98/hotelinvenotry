import { Injectable } from '@angular/core';
import { Roomlist } from '../rooms';
import { environment } from '../../../environments/environments';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomlist: Roomlist[] =[

      {
        roomNumber:1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        checkinTime: new Date ('11-Feb-2023'),
        checkoutTime: new Date ('12-Feb-2023'),
        rating: 4.5,
      },
    
      {
      roomNumber:2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      checkinTime: new Date ('11-Feb-2023'),
      checkoutTime: new Date ('12-Feb-2023'),
      rating: 4.,
    },
    
    {
      roomNumber:3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      checkinTime: new Date ('11-Feb-2023'),
      checkoutTime: new Date ('12-Feb-2023'),
      rating: 3.5,
    },
  ];
    

  constructor() { 
    console.log(environment.apiEndpoint);
    console.log('Room Service Initialized...');
  }

  getRooms(){

    return this.roomlist;

    }
}
