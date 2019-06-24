import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coconut-drink',
  templateUrl: './coconut-drink.component.html',
  styleUrls: ['../../app.component.scss','./coconut-drink.component.scss']
})
export class CoconutDrinkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  coconutDrink_title = "Coconut Drink Product";
  coconutDrink_para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi odit quasi labore temporibus optio aperiam autem distinctio, quia doloremque architecto, veritatis atque aliquid officiis vero iure fugiat praesentium et?"

}
