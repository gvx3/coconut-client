import { RouterModule } from '@angular/router';

import { AromaticCoconutComponent } from './aromatic-coconut/aromatic-coconut.component';
import { CoconutDrinkComponent } from './coconut-drink/coconut-drink.component';
import { IntroComponent } from './intro/intro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurStoryComponent } from './our-story/our-story.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    // IntroComponent,
    // OurStoryComponent,
    // TestimonialComponent,
    // NewsComponent,
    // CoconutDrinkComponent,
    // AromaticCoconutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class MainContentModule { }
