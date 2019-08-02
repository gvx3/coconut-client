import { Component, OnInit } from '@angular/core';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { environment } from 'src/environments/environment';
import { OurStoryService } from 'src/app/services/our-story.service';

@Component({
  selector: 'app-our-story-details',
  templateUrl: './our-story-details.component.html',
  styleUrls: ['./our-story-details.component.scss']
})
export class OurStoryDetailsComponent implements OnInit {
  storyTitle = 'Fresh from our farm';
  storyDescription = 'Aromatic coconuts are collected from our family farm in Damnoen saduak, Ratchaburi, Thailand.';
  description = 'Quality Aromatic coconuts come from a special soil in Damnoen Saduak, Ratchaburi, Thailand. The soil that they are grown in, used to be under sea level in the past. The aromatic coconuts contain all necessary vitamins and minerals that are beneficial for good health. Our quality product is made in Thailand. We capture the freshness of the coconut juice.';

  ourstoryLandingPage: any;
  storyDetail: any;

  constructor(private landingService: LandingPageService, private storyService: OurStoryService) {}

  ngOnInit() {
    this.getLandingOurStory();
    this.getStoryDetail();
  }

  getLandingOurStory(): void {
    const filter = {
      landing_type_id: 4
    };
    this.landingService.getLandingOurStory(filter).subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.ourstoryLandingPage = data;

        console.log(data);
      }
    );
  }

  getStoryDetail(): void {
    const filter = {
      our_story_type_id: 2
    };
    this.storyService.getStoryDetail(filter).subscribe(
      (data) => {
        data.forEach( (item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.storyDetail = data;
      }
    );
  }


}
