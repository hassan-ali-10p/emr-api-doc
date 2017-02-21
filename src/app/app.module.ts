import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { ApiCallComponent } from './api-call/api-call.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiCallsComponent,
    ApiCallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
