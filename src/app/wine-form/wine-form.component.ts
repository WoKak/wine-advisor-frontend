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

  private strains: string[] = [
    'SHIRAZ','PINOT','RIESLING','CASTELAO','MALBEC',
    'SAUVIGNON','ESPADEIRO','GRACIANO','BOMBINO','ZINFANDEL',
    'GEWURZTRAMINER','SYRAH','RONDINELLA','NEGROAMARO',
    'PRIMITIVO','MERLOT','GLERA','MOSCATO','SANGIOVESE',
    'FETEASCA','RABOSO','MOSCATEL','TINTA','AIREN','MONTEPULCIANO',
    'NERO','AGLIANICO','PROSECCO','MACABEO','BLAUBURGER','CHARDONNAY',
    'TREBBIANO','LOUREIRO','PEDRO','FURMINT','SAPERAVI','ARINTO',
    'CABERNET','COLOMBARD','VERMENTINO','TEMPRANILLO','GARNACHA',
    'MARZEMINO','GRENACHE','PALOMINO','CARINENA','MUSCAT','MALVASIA'
  ];

  private kinds: string[] = ['BIALE', 'MUSUJACE', 'ROZOWE', 'CZERWONE', 'WZMACNIANE'];

  private drynesses: string[] = ['WYTRAWNE', 'SLODKIE', 'POLSLODKIE', 'POLWYTRAWNE', 'LEKKOWYTRAWNE'];

  private origins: string[] = [
    'CHILE', 'SLOWACJA', 'GRUZJA', 'SZWECJA', 'MOLDAWIA',
    'NOWA-ZELANDIA', 'FRANCJA', 'NIEMCY', 'WLOCHY', 'WEGRY',
    'PORTUGALIA', 'HISZPANIA', 'ARGENTYNA', 'SLOWACJA'
  ];

  private classes: string[] = [
    'OWOCE-MORZA', 'RYBY', 'DESERY', 'SERY', 'JAGNIECINA',
    'MAKARONY', 'MIESA-CZERWONE', 'MIESA-BIALE', 'APERITIF', 'TEX-MEX',
    'WOLOWINA', 'DZICZYZNA', 'DROB', 'PRZYSTAWKI', 'WIEPRZOWINA',
    'SAMO-W-SOBIE', 'SUSHI', 'BARANINA'
  ];

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
