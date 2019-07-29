import { MainContentComponent } from './main-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentRoutingModule } from './main-content-routing.module';
import { IntroComponent } from './intro/intro.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { CoconutDrinkComponent } from './coconut-drink/coconut-drink.component';
import { AromaticCoconutComponent } from './aromatic-coconut/aromatic-coconut.component';


import { OurStoryDetailsComponent } from './our-story/our-story-details/our-story-details.component';
import { ProductComponent } from './product/product.component';
import { AromaticCoconutFruitComponent } from './aromatic-coconut-fruit/aromatic-coconut-fruit.component';
import { CocoDamnoenComponent } from './coco-damnoen/coco-damnoen.component';



@NgModule({
  declarations: [
    MainContentComponent,
    IntroComponent,
    OurStoryComponent,
    CoconutDrinkComponent,
    AromaticCoconutComponent,
    OurStoryDetailsComponent,
    ProductComponent,
    AromaticCoconutFruitComponent,
    CocoDamnoenComponent,


  ],
  imports: [
    CommonModule,
    MainContentRoutingModule
  ]
})
export class MainContentModule { }
