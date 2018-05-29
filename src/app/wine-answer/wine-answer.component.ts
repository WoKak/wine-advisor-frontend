import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wine-answer',
  templateUrl: './wine-answer.component.html',
  styleUrls: ['./wine-answer.component.css']
})
export class WineAnswerComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
