import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-story-details',
  templateUrl: './our-story-details.component.html',
  styleUrls: ['./our-story-details.component.scss']
})
export class OurStoryDetailsComponent implements OnInit {

  
  title1 = "Fresh from our farm"
  paragraph1 = "Aromatic coconuts are collected from our family farm in Damnoen saduak, Ratchaburi, Thailand."
  image1 =  "../../../../assets/img/jakob-owens-1273467-unsplash.png"


  title2 = "Natural preservation method"
  paragraph2 = "Our research team utilize preservation methods that are 100% natural, with no additives or preservatives in order to keep our mission to bring fresh essentials to your family. Quality foods preserved for your convenience and ease-of-use, while still delivering all the taste and nutrition of fresh foods. That’s why we utilize several preservation methods that are 100% natural, with no additives or preservatives, that maintain many of the qualities that make fresh foods so desirable."
  image2 = "../../../../assets/img/jonas-ducker-434669-unsplash.png"


  title3 =  "Convenience for eating, travelling and storage."
  paragraph3 = "We carefully pick the pouch with a big lid that is ergonomic for easy opening and closing. The pouch is easy to be stored in the fridge or an ice pack."
  image3 = "../../../../assets/img/meimei-ismail-1678489-unsplash.png"
    
  
  constructor() { }

  ngOnInit() {
  }

}
