
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './main-content/intro/intro.component';
import { MainContentComponent } from './main-content/main-content.component';
import { OurStoryComponent } from './main-content/our-story/our-story.component';
import { CoconutDrinkComponent } from './main-content/coconut-drink/coconut-drink.component';
import { AromaticCoconutComponent } from './main-content/aromatic-coconut/aromatic-coconut.component';
import { NewsComponent } from './main-content/news/news.component';
import { TestimonialComponent } from './main-content/testimonial/testimonial.component';
import { OurStoryDetailsComponent } from './main-content/our-story/our-story-details/our-story-details.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentModule } from './main-content/main-content.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    MainContentComponent,
    OurStoryComponent,
    CoconutDrinkComponent,
    AromaticCoconutComponent,
    NewsComponent,
    TestimonialComponent,
    OurStoryDetailsComponent,
    FooterComponent,
    
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    MainContentModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
