import { LandingPageService } from './../../services/landing-page.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../../app.component.scss','./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsLandingPage;

  constructor(private landingService: LandingPageService) {}

  ngOnInit() {
    this.getLandingNews();
  }

  getLandingNews(): void {
    let filter = {
      landing_type_id: 3
    }
    this.landingService.getLandingNews(filter).subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.newsLandingPage = data;

        console.log(data);
      }
    );
  }
  
}
