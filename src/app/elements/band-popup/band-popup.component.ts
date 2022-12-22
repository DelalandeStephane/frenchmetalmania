import { trigger,transition, style, animate, query } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { BandFromUrl } from 'src/app/interfaces/bandFromUrl.model';
import { BandService } from 'src/app/services/band.service';

@Component({
  selector: 'app-band-popup',
  templateUrl: './band-popup.component.html',
  styleUrls: ['./band-popup.component.scss'],
  animations: [
    trigger('bandModal', [
      transition(':enter', [
        query('.popup-content',[
          style({
            transform:'rotateY(180deg)',
          })
        ]),
        style({
            opacity: 0
        }),
        animate('250ms ease-out', style({
            opacity: 1,
        })),
        query('.popup-content',[
          animate('500ms 200ms',style({
            transform:'rotateY(0deg)',
          })
          )
        ])
    ]),
    transition(':leave', [
      query('.popup-content',[
        style({
          opacity:1
        })
      ]),
      style({
          opacity: 1
      }),
      animate('250ms ease-out', style({
          opacity: 0,
      })),
      query('.popup-content',[
        animate('250ms ease-out',style({
          opacity:0
        })
        )
      ])
  ])
    ])
  ]

})
export class BandPopupComponent implements OnInit, OnDestroy  {
  @Input() bandId!: string;
  @Output() loadingEvent = new EventEmitter<boolean>;
  @Output() popupCloseEvent = new EventEmitter<boolean>;
  
  bandObservable$! : Observable<BandFromUrl>;
  statusColor!:string;
  private destroy$!: Subject<boolean>;
  constructor(private bandsService : BandService) { }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    
     this.bandObservable$ = this.bandsService.getBand(this.bandId).pipe(

      map((band) => {
          // Fix translation from metal archives db
        if(band.location?.includes("Normandy")){
          band.location = band.location.replace('Normandy', 'Normandie')

        }
        else if(band.location?.includes("Brittany")){
          band.location = band.location.replace('Brittany', 'Bretagne')
        }
        return band = band;
      }),
      tap((band) => {
        this.loadingEvent.emit(true);
        if(band.status === "Active") {
          this.statusColor = "#66cd00"
        }
        else {
          this.statusColor = "#f59f00"
        }
      })
     )
  }

  closePopup(event: any){
    if(event.target.id ==="popup-container" || event.target.id ==="leave-btn"){
      this.popupCloseEvent.emit(false);
    }
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
