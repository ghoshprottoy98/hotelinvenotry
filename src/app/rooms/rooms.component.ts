import { HttpEventType } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { HeaderComponent } from '../header/header.component';
import { Room } from "./rooms"; 
import { Roomlist } from "./rooms"; 
import { RoomsService } from './services/rooms.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hotelinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})

export class RoomsComponent implements OnInit {

  roomList: Roomlist[] = [];

  totalBytes = 0;

  subscription!:Subscription;

  error$ : Subject<string> = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err)=>{
      console.log(err);
      this.error$.next(err.message);
      return of([]);    
    })
  );

  priceFilter = new FormControl(0);

  roomsCount$=  this.roomsService.getRooms$
  .pipe(map((rooms) => rooms.length)
  );

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();

  });


  constructor(private roomsService: RoomsService, 
    private config: ConfigService) {

  }

  
  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe(event=>{
    
      switch(event.type){
        case HttpEventType.Sent : {
          console.log("Request has been made");
          break;
        }
    
        case HttpEventType.ResponseHeader : {
          console.log("Request success");
          break;
        }
    
    
        case HttpEventType.DownloadProgress : {
          console.log("Response Header was received");
          this.totalBytes = event.loaded;
          break;
        }
    
        case HttpEventType.Response : {
          console.log(event.body);
          break;
        }
    
      }
    
    })
    
        this.stream.subscribe({
          next: x=>console.log(x),
          complete: ()=>console.log("complete"),
          error: err=>console.log(err)
        });
      }
    

  hotelName = "Hilton";
  numberOfRooms = 10;
  hideRooms=  false;
  rooms : Room = {
    availableRooms : 10,
    bookedRooms : 5,
    totalRooms: 20
  }




  title= "Room List";

  selectedRoom!:Roomlist;
   
  ngAfterViewChecked(): void {
     console.log('ngAfterViewChheked is called');
  }
  
  ngDoCheck(): void {
    console.log('onChanges is called');
  }


  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  

  toggle(): void {
    this.hideRooms = !this.hideRooms;
    this.title = "Room List";
  }

  selectRoom(room: Roomlist)
  {
  console.log(room);
  }


  addRoom()
  { 
    const room: Roomlist = {
    roomNumber: 4,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price: 1000,
    photos: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    checkinTime: new Date ('11-Feb-2023'),
    checkoutTime: new Date ('12-Feb-2023'),
    rating: 2,

  };

  this.roomList.push(room);
}

editRoom(){

  const room: Roomlist  ={
    roomNumber: 3,
    roomType: 'Deluxe Room',
    amenities: "AC, Wifi",
    price: 500,
    photos: 'https://unsplash.com/photos/JIUjvqe2ZHg',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 4.6
  };

  this.roomsService.editRoom(room).subscribe(data=>{
    this.roomList = data;
  });

}


deleteRoom(){
  this.roomsService.delete('3').subscribe(data=>{
    this.roomList = data;
  })
}

ngAfterViewInit(): void {
  this.headerComponent.title = "Rooms view";
  this.headerChildrenComponent.forEach(x=>x.title="Rooms Child");
}

ngOnDestroy(){
  if(this.subscription){
    this.subscription.unsubscribe;
  }
}

}
