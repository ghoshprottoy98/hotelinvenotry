import { Pipe, PipeTransform } from '@angular/core';
import { Roomlist } from './rooms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rooms: Roomlist[] ,  price:number): Roomlist[] {
    return rooms.filter(x=>x.price<=price);
  }

}
