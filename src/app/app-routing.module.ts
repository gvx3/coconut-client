import { NewsDetailComponent } from './main-content/news/news-detail/news-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {path: 'home', component: MainContentComponent},
  // {path: 'our-story', component: OurStoryDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: '../app/main-content/main-content.module#MainContentModule'},
  { path: 'news', loadChildren: '../app/main-content/news/news.module#NewsModule',
  // children: [
  //   { path: 'detail', component: NewsDetailComponent }
  // ]
  },
  { path: 'store', loadChildren: '../app/main-content/store/store.module#StoreModule'},
  { path: 'our-story', loadChildren: '../app/main-content/our-story/our-story.module#OurStoryModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
