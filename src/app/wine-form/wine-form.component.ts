import {Component, OnInit} from '@angular/core';
import {Wine} from '../wine';
import {BackendService} from '../backend.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WineAnswerComponent} from '../wine-answer/wine-answer.component';

@Component({
  selector: 'app-wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.css']
})
export class WineFormComponent implements OnInit {

  model: any = {};

  strains = [
    'GRACIANO', 'PROSECCO', 'BLAUBURGER', 'LOUREIRO', 'GLERA',
    'RONDINELLA', 'SANGIOVESE', 'MOSCATEL', 'MALVASIA', 'MALBEC',
    'CASTELAO', 'VERMENTINO', 'CABERNET', 'MACABEO', 'PINOT',
    'MONTEPULCIANO', 'GEWURZTRAMINER', 'MERLOT', 'RIESLING', 'NEGROAMARO',
    'MARZEMINO', 'MOSCATO', 'AGLIANICO', 'BOMBINO', 'PRIMITIVO',
    'MUSCAT', 'TEMPRANILLO', 'RABOSO', 'FURMINT', 'CHARDONNAY',
    'FETEASCA', 'GRENACHE', 'SAPERAVI', 'PEDRO', 'NERO'
  ];

  kinds = ['BIALE', 'WINO-MUSUJACE', 'ROZOWE', 'CZERWONE'];

  drynesses = ['WYTRAWNE', 'SLODKIE', 'POLSLODKIE', 'POLWYTRAWNE'];

  origins = [
    'CHILE', 'SLOWACJA', 'GRUZJA', 'SZWECJA', 'MOLDAWIA',
    'NOWA-ZELANDIA', 'FRANCJA', 'NIEMCY', 'WLOCHY', 'WEGRY',
    'PORTUGALIA', 'HISZPANIA'];

  constructor(private backendService: BackendService, private modalService: NgbModal) {
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

        this.open(data);
      }
    );
  }

  refreshKnowledge() {

    this.backendService.refreshKnowledge().subscribe();
  }

  open(data: string) {

    const modalRef = this.modalService.open(WineAnswerComponent);
    modalRef.componentInstance.answer = data.toLowerCase().replace('-', ' ');
  }
}
