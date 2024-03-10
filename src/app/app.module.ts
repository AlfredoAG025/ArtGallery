import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MydrawingsComponent } from './pages/mydrawings/mydrawings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import { DrawingCardComponent } from './components/drawing-card/drawing-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MydrawingsComponent,
    NavbarComponent,
    DrawingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
