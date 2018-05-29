import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineAnswerComponent } from './wine-answer.component';

describe('WineAnswerComponent', () => {
  let component: WineAnswerComponent;
  let fixture: ComponentFixture<WineAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
