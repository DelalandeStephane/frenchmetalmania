import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BandFromUrl } from '../interfaces/bandFromUrl.model';
import { BandFromServer } from '../interfaces/bandFromServer.model';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor(private http: HttpClient) { }

  private genreList = [
    'avant-garde',
    'black',
    'death',
    'deathcore',
    'doom',
    'experimental',
    'folk',
    'gothic',
    'grindcore',
    'groove',
    'heavy',
    'industrial',
    'metalcore',
    'pagan',
    'power',
    'progressive',
    'sludge',
    'speed',
    'stoner',
    'symphonic',
    'thrash',
    'viking'
  ]

  private locationList = [
    'Auvergne-Rhône-Alpes',
    'Bourgogne-Franche-Comté',
    'Bretagne',
    'Centre-Val de Loire',
    'Grand Est',
    'Hauts-de-France',
    'Île-de-France',
    'Normandie',
    'Nouvelle-Aquitaine',
    'Occitanie',
    'Pays de la Loire',
    'Provence-Alpes-Côte d\'Azur'
  ]

  private alphabet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


  getBands(){
    return this.http.get<BandFromServer[]>(`http://localhost:3000/api/band/get-all-bands`);
  }

  getBand(id:string){
    return this.http.get<BandFromUrl>(`http://localhost:3000/api/band/get-band/${id}`);
  }

  getSearchBands(search : string){
    return this.http.get<BandFromServer[]>(`http://localhost:3000/api/band/get-search-bands/${search}`);
  }

  getFilterBands(search: {} = {}) {

    return this.http.post<BandFromServer[]>(`http://localhost:3000/api/band/get-filter-bands`,search);
  }

  getGenreList(){
    return this.genreList;
  }

  getLocationList(){
    return this.locationList;
  }

  getAlphabetList(){
    return this.alphabet;
  }
}
