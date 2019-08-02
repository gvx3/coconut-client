import { StoreService } from './../../services/store.service';
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
  storeLatest: any;
  storeSuggested: any;
  topStoreSuggested: Array<any> = [];
  constructor(private landingService: LandingPageService, private storeService: StoreService) {}

  ngOnInit() {
    this.getLandingStore();
    this.getStoreLatest();
    this.getStoreSuggested();
    this.getTopStoreSuggested();
  }

  getLandingStore(): void {
    const filter = {
      landing_type_id: 2
    };
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

  getStoreLatest(): void {
    const filter = {
      store_type_id: 1
    };
    this.storeService.getStoreLatest(filter).subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.storeLatest = data;

        console.log(data);
      }
    );
  }

  getStoreSuggested(): void {
    const filter = {
      store_type_id: 2
    };
    this.storeService.getStoreSuggested(filter).subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.storeSuggested = data;

        console.log(data);
      }
    );
  }

  getTopStoreSuggested(): void {
    const filter = {
      store_type_id: 2,
      limit: 1,
      order: 'id desc'
    };
    this.storeService.getTopStoreSuggested(filter).subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.topStoreSuggested = data;

        console.log(data);
      }
    );
  }

}
