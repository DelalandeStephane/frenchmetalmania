import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchImgUrl: string = "assets/img/search.svg";
  searchPlaceHolder : string ="Trouver un groupe";
  @Output() searchValueEmit = new EventEmitter<string>;
  searchValue!: string;
  constructor() { }

  ngOnInit(): void {
  }

  searchSubmit() {
    this.searchValueEmit.emit(this.searchValue);
  }
}
