import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  title = 'coco damnoen';
  description = 'Thai aromatic coconut jelly drink';
  constructor() {}

  ngOnInit() {
  }

}
