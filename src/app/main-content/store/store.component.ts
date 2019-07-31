import { LandingPageService } from 'src/app/services/landing-page.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  storeLandingPage;

  constructor(private landingService: LandingPageService) {}

  ngOnInit() {
    this.getLandingStore();
  }

  getLandingStore(): void {
    let filter = {
      landing_type_id: 2
    }
    this.landingService.getLandingStore(filter).subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.storeLandingPage = data;

        console.log(data);
      }
    );
  }

}
