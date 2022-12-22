import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BandService } from 'src/app/services/band.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterEvent = new EventEmitter<string>();
  filterSelected!: string;
  filterForm!: FormGroup;
  alphabet!: string[];
  genreList!: string[]; 
  locationList!: string[];
  statusList!: string[]; 
  filterBand : boolean = false;

  constructor(private fb: FormBuilder, private bandService : BandService) { }



  ngOnInit( ): void {
    this.alphabet = this.bandService.getAlphabetList();
    this.genreList = this.bandService.getGenreList();
    this.locationList = this.bandService.getLocationList();
    this.statusList = ['actif', 'séparé / en pause'];
    this.filterForm = this.fb.group({
      location:[''],
      genre:[''],
      status:[''],
      letter:[this.filterSelected]
    });
  }
  

  filterByLetterEvent(letter : string) {
    if(letter === "all") {
      this.filterSelected = "";
    } else {
      this.filterSelected = letter;
    }
    this.filterForm.value.letter = this.filterSelected;
    this.filterBand = true;
    this.filterEvent.emit(this.filterForm.value);
  }

  filterSubmit(){
    if(this.filterForm.value.location === "Bretagne"){
      this.filterForm.value.location = 'Brittany';
    }
    else if(this.filterForm.value.location === "Normandie"){
      this.filterForm.value.location = 'Normandy';
    }
    
    

    this.filterForm.value.letter = this.filterSelected;
    this.filterBand = true;
    this.filterEvent.emit(this.filterForm.value);
  }

  resetFilter() {
    this.filterSelected = "";
    this.filterForm.reset();
    this.filterBand = false;
    this.filterEvent.emit(this.filterForm.value);
  
  }
}
