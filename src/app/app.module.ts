import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {WineFormComponent} from './wine-form/wine-form.component';
import {BackendService} from './backend.service';
import { WineAnswerComponent } from './wine-answer/wine-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    WineFormComponent,
    WineAnswerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, NgbModule.forRoot()
  ],
  entryComponents: [WineAnswerComponent],
  providers: [HttpClient, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
