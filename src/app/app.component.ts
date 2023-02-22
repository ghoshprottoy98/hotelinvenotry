import { AfterViewInit, Component,  ElementRef,  OnInit,  Optional,  ViewChild, ViewContainerRef } from '@angular/core';
import { LoggerService } from './logger.service';
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

  constructor(@Optional () private loggerService: LoggerService,)
  {

  }

  ngOnInit(){
    this.loggerService.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = "Hilton Hotel";
  }

 // @ViewChild('User', {read: ViewContainerRef} ) vcr!: ViewContainerRef;

  //ngAfterViewInit() {
 //   const componentRef= this.vcr.createComponent(RoomsComponent) ;
   // componentRef.instance.numberOfRooms = 50;
 // }


}
