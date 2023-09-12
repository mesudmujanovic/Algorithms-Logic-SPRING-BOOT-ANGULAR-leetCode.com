import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgoritamsLogichComponent } from './component/algLog0/algorithms-logic.component';
import { Alg1Component } from './component/algLog1/alg1';

@NgModule({
  declarations: [
    AppComponent,
    AlgoritamsLogichComponent,
    Alg1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
