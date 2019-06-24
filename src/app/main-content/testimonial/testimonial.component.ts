import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['../../app.component.scss','./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  testimonial_title = "Testimonial";
  testimonial_para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi odit quasi labore temporibus optio aperiam autem distinctio, quia doloremque architecto, veritatis atque aliquid officiis vero iure fugiat praesentium et?"
}
