import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotelinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = '';

  constuctor(): void {}

  ngOnInit(): void{}

}
