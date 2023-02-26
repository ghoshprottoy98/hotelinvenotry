
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'hotelinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {

  id!:number;

  id$ =this.router.paramMap.pipe(
    map(params=>params.get('id'))
  )

  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
  
  }

}
