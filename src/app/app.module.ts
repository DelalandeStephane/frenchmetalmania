import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './elements/nav-bar/nav-bar.component';
import { SearchBarComponent } from './elements/search-bar/search-bar.component';
import { CardComponent } from './elements/card/card.component';
import { ModalCardComponent } from './elements/modal-card/modal-card.component';
import { BandListComponent } from './pages/band-list/band-list.component';
import { BandMapComponent } from './pages/band-map/band-map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    CardComponent,
    ModalCardComponent,
    BandListComponent,
    BandMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
