import { Component, Input, OnInit } from '@angular/core';
import { BandFromServer } from 'src/app/interfaces/bandFromServer.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  noPicture : string = 'assets/img/logo.png';
  @Input() bandData!: BandFromServer;
  constructor() { }

  ngOnInit(): void {
    // Fix translation from metal archives db
    if(this.bandData.band_country.includes("Normandy")){
      this.bandData.band_country = this.bandData.band_country.replace('Normandy', 'Normandie')

    }
    else if(this.bandData.band_country.includes("Brittany")){
      this.bandData.band_country = this.bandData.band_country.replace('Brittany', 'Bretagne')
    }
  }

  public textScroll(e: any) {
    const targets = e.target.childNodes[0].childNodes;
      targets.forEach((target:Element) => {
        const anim = setInterval(() => {
          target.scrollLeft += 10;
        },100);
        setTimeout(() => {
          clearInterval(anim);
          target.scrollLeft = 0;
        }, 2000)
        
      });
     
  }

}
