import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { MainContentComponent } from './main-content.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurStoryDetailsComponent } from './our-story/our-story-details/our-story-details.component';

const routes: Routes = [
  {path: '', component: MainContentComponent,
  children: [
    { path: '', component: OurStoryComponent },
    // { path: 'detail', component: NewsDetailComponent }
  ]

}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class MainContentRoutingModule { }
