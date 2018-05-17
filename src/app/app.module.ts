import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { WineFormComponent } from './wine-form/wine-form.component';
import {BackendService} from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    WineFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [HttpClient, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
