import { OurStoryDetailsComponent } from './main-content/our-story/our-story-details/our-story-details.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  // {path: 'home', component: MainContentComponent},
  // {path: 'our-story', component: OurStoryDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: '../app/main-content/main-content.module#MainContentModule'},
  { path: 'news', loadChildren: '../app/main-content/news/news.module#NewsModule'},
  { path: 'store', loadChildren: '../app/main-content/store/store.module#StoreModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
