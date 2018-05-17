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
      data => {
        alert('Twoje wino najlepiej nadaje się jako: ' + data);
      }
    );
  }

  refreshKnowledge() {

    this.backendService.refreshKnowledge().subscribe();
  }
}
