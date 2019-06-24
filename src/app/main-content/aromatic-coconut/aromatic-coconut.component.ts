import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aromatic-coconut',
  templateUrl: './aromatic-coconut.component.html',
  styleUrls: ['../../app.component.scss','./aromatic-coconut.component.scss']
})
export class AromaticCoconutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  aromatic_title = "Aromatic Coconut";
  aromatic_para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi odit quasi labore temporibus optio aperiam autem distinctio, quia doloremque architecto, veritatis atque aliquid officiis vero iure fugiat praesentium et?"
}
