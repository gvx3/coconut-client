import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['../../app.component.scss','./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {

  ourStory_title = "Our Story";
  ourStory_para = "Quality Aromatic coconuts come from a special soil in Damnoen Saduak, Ratchaburi, Thailand. The soil that they are grown in, used to be under sea level in the past. The aromatic coconuts contain all necessary vitamins and minerals that are beneficial for good health. Our quality product is made in Thailand. We capture the freshness of the coconut juice."
  
  constructor() { }

  ngOnInit() {
  }
 }
