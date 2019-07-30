import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsTitle = 'Benefits "Coconut water" for health "What is the best woman to drink?"';
  detailNews;
  constructor() { }

  ngOnInit() {
  }

}
