import { LandingPageService } from './../../services/landing-page.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsService } from 'src/app/services/news.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../../app.component.scss','./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsLandingPage;
  newsLatest: any;
  newsSuggested: any;
  topNews: Array<any> = [];

  constructor(private landingService: LandingPageService,
              private newsService: NewsService) {}

  ngOnInit() {
    this.getLandingNews();
    this.getNewsLatest();
    this.getNewsSuggested();
    this.getTopNewsSuggested();
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

        // console.log(data);
      }
    );
  }

  getNewsLatest(): void {
    this.newsService.getNewsLatest().subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.newsLatest = data;

        // console.log(data);
      }
    );
  }

  getNewsSuggested(): void {
    this.newsService.getNewsSuggested().subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.newsSuggested = data;
        // console.log('get top Data:' + this.topNews);
      }
    );
  }
  getTopNewsSuggested() {
    const filter = {
      limit: 3,
      order: 'id desc'
    };
    this.newsService.getTopNewsSuggested(filter).subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.topNews = data;
        // console.log('get top Data:' + this.topNews);
      }
    );
  }

}
