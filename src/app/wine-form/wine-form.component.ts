import { Component, OnInit } from '@angular/core';
import {Wine} from '../wine';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.css']
})
export class WineFormComponent implements OnInit {

  model: any = {};

  strains = [
    'GRACIANO','PROSECCO','BLAUBURGER','LOUREIRO','GLERA',
    'RONDINELLA','SANGIOVESE','MOSCATEL','MALVASIA','MALBEC',
    'CASTELAO','VERMENTINO','CABERNET','MACABEO','PINOT',
    'MONTEPULCIANO','GEWURZTRAMINER','MERLOT','RIESLING','NEGROAMARO',
    'MARZEMINO','MOSCATO','AGLIANICO','BOMBINO','PRIMITIVO',
    'MUSCAT','TEMPRANILLO','RABOSO','FURMINT','CHARDONNAY',
    'FETEASCA','GRENACHE','SAPERAVI','PEDRO','NERO'
  ];

  kinds = ['BIALE','WINO-MUSUJACE','ROZOWE','CZERWONE'];

  drynesses = ['WYTRAWNE','SLODKIE','POLSLODKIE','POLWYTRAWNE'];

  origins = [
    'CHILE','SLOWACJA','GRUZJA','SZWECJA','MOLDAWIA',
    'NOWA-ZELANDIA','FRANCJA','NIEMCY','WLOCHY','WEGRY',
    'PORTUGALIA','HISZPANIA'];

  constructor(private backendService: BackendService) {
  }

  ngOnInit() {
  }

  ask() {

    let wineToAsk = new Wine(
      this.model.alcoholPercentage,
      this.model.grapeVariety,
      this.model.wineType,
      this.model.wineDryness,
      this.model.wineOrigin
    );

    this.backendService.ask(wineToAsk).subscribe(
      (data: string) => {
        alert('Do tego wina najlepiej pasuje potrawa: ' + data.toLowerCase().replace('-', ' '));
      }
    );
  }

  refreshKnowledge() {

    this.backendService.refreshKnowledge().subscribe();
  }
}
