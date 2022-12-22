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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './elements/filter/filter.component';
import { BandPopupComponent } from './elements/band-popup/band-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './elements/loader/loader.component';
import { FilterLetterComponent } from './elements/filter-letter/filter-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    CardComponent,
    ModalCardComponent,
    BandListComponent,
    BandMapComponent,
    FilterComponent,
    BandPopupComponent,
    LoaderComponent,
    FilterLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
