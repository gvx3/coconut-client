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
  aromatic_title = "Aromatic Jelly Coconut Product";
  aromatic_paragraph = "Quality Aromatic coconuts come from a special soil in Damnoen Saduak, Ratchaburi, Thailand. The soil that they are grown in, used to be under sea level in the past."
}
