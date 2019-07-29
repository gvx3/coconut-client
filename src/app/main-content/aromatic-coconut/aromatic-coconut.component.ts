import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aromatic-coconut',
  templateUrl: './aromatic-coconut.component.html',
  styleUrls: ['../../app.component.scss','./aromatic-coconut.component.scss']
})
export class AromaticCoconutComponent implements OnInit {
  aromaticTitle = 'Thai aromatic coconut jelly drink';
  constructor() { }

  ngOnInit() {
  }
}
