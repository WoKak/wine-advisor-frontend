import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  model: any = {};

  constructor(private http: HttpClient) {}

  ask() {

    let wineToAsk = new Wine(
      this.model.alcoholPercentage,
      this.model.grapeVariety,
      this.model.wineType,
      this.model.wineDryness,
      this.model.wineOrigin
    );

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:4200');

    this.http.post(
      'http://localhost:8443/wine/ask',
      {'wine-to-ask': wineToAsk},
      {headers: httpHeaders}
    ).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        alert('To wino świetnie nadaje się jako: ' + response.puropse);
      }
    );
  }
}

class Wine {

  private readonly _alcoholPercentage: string;
  private readonly _grapeVariety: string;
  private readonly _wineType: string;
  private readonly _wineDryness: string;
  private readonly _wineOrigin: string;

  constructor(alcoholPercentage: string, grapeVariety: string, wineType: string, wineDryness: string, wineOrigin: string) {

    this._alcoholPercentage = alcoholPercentage;
    this._grapeVariety = grapeVariety;
    this._wineType = wineType;
    this._wineDryness = wineDryness;
    this._wineOrigin = wineOrigin;
  }


  get alcoholPercentage(): string {
    return this._alcoholPercentage;
  }

  get grapeVariety(): string {
    return this._grapeVariety;
  }

  get wineType(): string {
    return this._wineType;
  }

  get wineDryness(): string {
    return this._wineDryness;
  }

  get wineOrigin(): string {
    return this._wineOrigin;
  }

  // for debug purposes

  printWine(): string {
    return this._alcoholPercentage + '\n'
      + this._grapeVariety + '\n'
      + this._wineType + '\n'
      + this._wineDryness + '\n'
      + this._wineOrigin + '\n';
  }
}
