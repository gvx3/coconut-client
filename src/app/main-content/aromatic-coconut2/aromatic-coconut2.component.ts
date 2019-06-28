import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aromatic-coconut2',
  templateUrl: './aromatic-coconut2.component.html',
  styleUrls: ['./aromatic-coconut2.component.scss']
})
export class AromaticCoconut2Component implements OnInit {

  title: string = "Aromatic Coconut";
  para: string = "Quality Aromatic coconuts come from a special soil in Damnoen Saduak, Ratchaburi, Thailand. The soil that they are grown in, used to be under sea level in the past."
  constructor() { }

  ngOnInit() {
  }

}
