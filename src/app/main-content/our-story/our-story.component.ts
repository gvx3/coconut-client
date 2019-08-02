import { Component, OnInit } from '@angular/core';
import { OurStoryService } from 'src/app/services/our-story.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['../../app.component.scss','./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {

  storyHomePage: any;
  storyDetail: any;
  constructor(private storyService: OurStoryService) { }

  ngOnInit() {
    this.getStoryHomePage();

  }

  getStoryHomePage(): void {
    const filter = {
      our_story_type_id: 1
    };
    this.storyService.getStoryHomePage(filter).subscribe(
      (data) => {
        data.forEach( (item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.storyHomePage = data;
      }
    );
  }



 }
