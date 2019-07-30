import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-story-details',
  templateUrl: './our-story-details.component.html',
  styleUrls: ['./our-story-details.component.scss']
})
export class OurStoryDetailsComponent implements OnInit {
  landingTitle = 'Our story';
  landingDescription = 'Thai aromatic coconut jelly drink';

  storyTitle = 'Fresh from our farm';
  storyDescription = 'Aromatic coconuts are collected from our family farm in Damnoen saduak, Ratchaburi, Thailand.';

  constructor() { }

  ngOnInit() {
  }

}
