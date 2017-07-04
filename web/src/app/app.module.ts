import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';

// Pages:
import { HomeModule } from './pages/home/home.module';
import { SecondModule } from './pages/second/second.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,

    // Custom
    SharedModule.forRoot(),

    // Pages
    HomeModule,
    SecondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
