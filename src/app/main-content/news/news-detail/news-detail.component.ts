import { Component, OnInit, Inject } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsTitle = 'Benefits "Coconut water" for health "What is the best woman to drink?"';
  detailNews;
  sub: Subscription;

  contentNews = '';
  // element: HTMLElement;
  constructor(private newsService: NewsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getNewsById(id);
      }
    );
  }

  getNewsById(id: number): void {
    this.newsService.getNewsById(id).subscribe(
      (data) => {
        this.detailNews = data;
        this.contentNews = data.description_details;
      }
    );
  }

}
