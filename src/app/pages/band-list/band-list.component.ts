import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss']
})
export class BandListComponent implements OnInit {

  bandData : {}[] = [
    {},
    {},
    {}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
