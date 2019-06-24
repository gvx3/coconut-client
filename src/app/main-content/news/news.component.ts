import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../../app.component.scss','./news.component.scss']
})
export class NewsComponent implements OnInit {
  
  items_1  = [
    {content: "ome quick example text to build on the card title and make up the bulk of the card's content.", image: "assets/img/berries-berry.jpg"},
    {content: "ome quick example text to build on the card title and make up the bulk of the card's content.", image: "assets/img/berries-berry.jpg"},
    {content: "ome quick example text to build on the card title and make up the bulk of the card's content.", image: "assets/img/berries-berry.jpg"}
    
  ]

  items_2 = [
    {content: "ome quick example text to build on the card title and make up the bulk of the card's content.", image: "assets/img/berries-berry.jpg"},
    {content: "ome quick example text to build on the card title and make up the bulk of the card's content.", image: "assets/img/berries-berry.jpg"},
    {content: "ome quick example text to build on the card title and make up the bulk of the card's content.", image: "assets/img/berries-berry.jpg"}
  ]
  ngOnInit() {

  }
  
}
