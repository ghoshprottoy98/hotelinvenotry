import { AfterViewInit, Component,  ElementRef,  OnInit,  ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hotelinv-root',
  templateUrl: './app.component.html',
 // template: `<h1> Hello World  </h1>
 // <p>Angular is awesome</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'hotelinvenotry';

  @ViewChild('name', {static: true} ) name!: ElementRef;

  ngOnInit(){
    this.name.nativeElement.innerText = "Hilton Hotel";
  }

 // @ViewChild('User', {read: ViewContainerRef} ) vcr!: ViewContainerRef;

  //ngAfterViewInit() {
 //   const componentRef= this.vcr.createComponent(RoomsComponent) ;
   // componentRef.instance.numberOfRooms = 50;
 // }


}
