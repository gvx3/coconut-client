import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aromatic-coconut-fruit',
  templateUrl: './aromatic-coconut-fruit.component.html',
  styleUrls: ['./aromatic-coconut-fruit.component.scss']
})
export class AromaticCoconutFruitComponent implements OnInit {
  aromaticTitle = 'Aromatic coconut';
  aromaticDescription = 'Quality Aromatic coconuts comes from a special soil in Ratchaburi. The soil that is used, used to be under sea level in the past. The aromatic coconuts contain all necessary vitamins and minerals that are beneficial for good health. Some benefits of Aromatic coconut juice';
  benefitDescription = '';
  constructor() { }

  ngOnInit() {
  }

}
