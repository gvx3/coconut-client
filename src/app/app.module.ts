
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

import { OurStoryDetailsComponent } from './main-content/our-story/our-story-details/our-story-details.component';
import { FooterComponent } from './footer/footer.component';


import { AromaticCoconut2Component } from './main-content/aromatic-coconut2/aromatic-coconut2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
