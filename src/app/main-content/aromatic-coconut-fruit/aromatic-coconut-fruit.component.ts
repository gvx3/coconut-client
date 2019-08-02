import { Component, OnInit } from '@angular/core';
import { AromaticCoconutService } from 'src/app/services/aromatic-coconut.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aromatic-coconut-fruit',
  templateUrl: './aromatic-coconut-fruit.component.html',
  styleUrls: ['./aromatic-coconut-fruit.component.scss']
})
export class AromaticCoconutFruitComponent implements OnInit {
  aromaticCoconut: any;
  aromaticBenefit: any;
  constructor(private aromaticService: AromaticCoconutService) { }

  ngOnInit() {
    this.getAromatic();
    this.getBenefit();
  }

  getAromatic(): void {
    this.aromaticService.getAromatic().subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.aromaticCoconut = data;
        console.log(data);
      }
    );
  }

  getBenefit(): void {
    this.aromaticService.getBenefit().subscribe(
      (data) => {
        this.aromaticBenefit = data;
        console.log(data);
        
      }
    );
  }

}
