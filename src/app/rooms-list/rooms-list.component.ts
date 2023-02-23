import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Roomlist } from '../rooms/rooms';


@Component({
  selector: 'hotelinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() rooms:Roomlist[] | null = [];

  @Input() title:string = "";

  @Output() selectedRoom = new EventEmitter<Roomlist>();

  @Input() price = 0;

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {

    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
  }

  selectRoom(room: Roomlist){
    this.selectedRoom.emit(room);
  }


  ngOnDestroy(): void {    
    console.log('onDestroy is called');
  }



}
