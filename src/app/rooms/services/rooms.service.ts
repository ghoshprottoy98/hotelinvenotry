import { Injectable } from '@angular/core';
import { Roomlist } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomlist: Roomlist[] =[ 

    
  ];
    

  constructor() {
    console.log ('Rooms Service Initialized...')
   }

  getRooms(){

    return this.roomlist;

    }
}
