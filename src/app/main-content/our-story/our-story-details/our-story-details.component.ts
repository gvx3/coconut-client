import { Component, OnInit } from '@angular/core';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-our-story-details',
  templateUrl: './our-story-details.component.html',
  styleUrls: ['./our-story-details.component.scss']
})
export class OurStoryDetailsComponent implements OnInit {
  storyTitle = 'Fresh from our farm';
  storyDescription = 'Aromatic coconuts are collected from our family farm in Damnoen saduak, Ratchaburi, Thailand.';

  ourstoryLandingPage;

  constructor(private landingService: LandingPageService) {}

  ngOnInit() {
    this.getLandingOurStory();
  }

  getLandingOurStory(): void {
    let filter = {
      landing_type_id: 4
    }
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

}
