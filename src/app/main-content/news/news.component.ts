import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../../app.component.scss','./news.component.scss']
})
export class NewsComponent implements OnInit {
  title = 'News';
  constructor() {}
  ngOnInit() {

  }
  
}
