import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchImgUrl: string = "assets/img/search.svg";
  searchPlaceHolder : string ="Groupe, localisation, style, ..."
  constructor() { }

  ngOnInit(): void {
  }

}
