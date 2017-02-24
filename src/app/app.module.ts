import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { ApiCallService } from './api-call.service';
@NgModule({
  declarations: [
    AppComponent,
    ApiCallsComponent,
    ApiCallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
