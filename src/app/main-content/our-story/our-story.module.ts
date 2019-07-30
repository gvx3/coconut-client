import { OurStoryComponent } from './our-story.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OurStoryRoutingModule } from './our-story-routing.module';
import { OurStoryDetailsComponent } from './our-story-details/our-story-details.component';

@NgModule({
  declarations: [
    // OurStoryComponent
    OurStoryDetailsComponent
  ],
  imports: [
    CommonModule,
    OurStoryRoutingModule
  ]
})
export class OurStoryModule { }
