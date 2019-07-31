import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  landingPage: any;
  constructor(private landingService: LandingPageService) {}

  ngOnInit() {
    this.getLandingHomePage();
  }

  getLandingHomePage(): void {
    let filter = {
      landing_type_id: 1
    }
    this.landingService.getLandingHomePage(filter).subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.landingPage = data;

        console.log(data);
      }
    );
  }

}
