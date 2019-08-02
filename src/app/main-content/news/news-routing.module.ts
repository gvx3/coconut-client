import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';

const routes: Routes = [
  { path: '', component: NewsComponent,
  children: [

  ]
  },
  { path: 'detail/:id', component: NewsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
