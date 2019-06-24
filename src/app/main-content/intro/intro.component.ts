import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  styles: [`
    .img { 
      max-height: 90vh;
      width: 100%;
    }
    .text {
      position: absolute;
      font-size: 3em;
      top: 20%;
      left: 45%;
    }
    .relative {
      position: relative;
    }
  `]
  
})
export class IntroComponent implements OnInit {
  
  constructor() {
    
   }

  ngOnInit() {
  }

}
