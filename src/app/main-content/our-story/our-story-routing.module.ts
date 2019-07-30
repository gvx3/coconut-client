import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurStoryComponent } from './our-story.component';
import { OurStoryDetailsComponent } from './our-story-details/our-story-details.component';

const routes: Routes = [
  { path: '', component: OurStoryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurStoryRoutingModule { }
