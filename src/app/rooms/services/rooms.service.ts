import { Inject, Injectable } from '@angular/core';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { environment } from 'src/environments/environments';
import { Roomlist } from '../rooms';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  headers = new HttpHeaders({"token": "12345"});


  roomList : Roomlist[] = [];
   
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig, private http: HttpClient ) {
    console.log("Rooms Service initialized");
    console.log(this.config.apiEndPoint);
   }

   getRooms$ =this.http.get<Roomlist[]>('/api/rooms').pipe(
      shareReplay(1)      
      );

  
  getRooms(): Observable<Roomlist[]>{
     
    return this.http.get<Roomlist[]>('/api/rooms');
  }

  addRoom(room: Roomlist) {
    return this.http.post<Roomlist[]>('/api/rooms',room,
        
    );
  }

  editRoom(room: Roomlist) {
    return this.http.put<Roomlist[]>(`/api/rooms/${room.roomNumber}`,room);
  }

  delete(id: string) {
    return this.http.delete<Roomlist[]>(`/api/rooms/${id}`);
  }


  getPhotos(){
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`,{
      reportProgress: true,
    });
    return this. http.request(request);
  }


  

}


