import {Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
import { BandFromServer } from 'src/app/interfaces/bandFromServer.model';
import { BandService } from 'src/app/services/band.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss']
})
export class BandListComponent implements OnInit {

  bandData! :BandFromServer  ;
  dataLoading : boolean = false;
  skipNumber : number = 0
  bandsObservable$! : Observable<BandFromServer[]>;
  popupCall :boolean = false;
  selectedBandId!: string;

  constructor( private bandService : BandService) { }


  ngOnInit(): void {
    this.bandsObservable$ =  this.bandService.getBands().pipe(
      tap(() => {
        this.dataLoading = true;
      })
    )  
  }

  bandSpecialSearch(search: string) {
    this.dataLoading = false;
    if(search === '') {
      this.bandsObservable$ =  this.bandService.getBands().pipe(
      )  

    } else {
      this.bandsObservable$ =  this.bandService.getSearchBands(search).pipe(
        tap(() => {
          this.dataLoading = true;
        })
      )  
    }

  }

  getFilteredBands(searchValue: {}) {
    this.dataLoading = false;
    this.bandsObservable$ =  this.bandService.getFilterBands(searchValue).pipe(
      tap(() => {
        this.dataLoading = true;
      })
    )  
  }

  OnSelectBand(bandId : string){
    this.popupCall = true;
    this.selectedBandId = bandId;
    this.dataLoading = false;
  }

  closePopup(value: boolean) {
    this.popupCall = value;
  }
  bandLoading(value:boolean) {
    this.dataLoading = true;
  }


}
