import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  address = '377/1 Moo 17, Tumbol Sila, Amphur Muang, Khon Kaen, Thailand 40000';
  phone = '(+66) 084-204-5999, (+66) 080-281-0062';
  mail = 'sales@cocodamnoen.com';
  constructor() { }

  ngOnInit() {
  }

}
