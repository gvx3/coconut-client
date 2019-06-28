import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  benefits: any[] = [
    {title: "plant based"},
    {title: "essential electrolytes"},
    {title: "single sourced"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
