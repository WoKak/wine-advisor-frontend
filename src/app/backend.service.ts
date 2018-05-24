import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Wine} from './wine';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) {}

  ask(wineToAsk: Wine) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this.http.post(
      'http://localhost:8443/wine/ask',
      {
        alcoholPercentage: wineToAsk.alcoholPercentage,
        grapeVariety: wineToAsk.grapeVariety,
        wineType: wineToAsk.wineType,
        wineDryness:  wineToAsk.wineDryness,
        wineOrigin: wineToAsk.wineOrigin
      },
      {headers: httpHeaders}
    ).map(
      data => {
        const response = JSON.parse(JSON.stringify(data, null, 4));
        return response.purpose;
      }
    );
  }

  refreshKnowledge() {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this.http.get(
      'http://localhost:8443/wine/refresh-base',
      {headers: httpHeaders}
    );
  }
}
