import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WavesComponent } from './components/waves/waves.component';
// import { BackgroundHeadComponent } from './components/background-head/background-head.component';

@NgModule({
  declarations: [
    AppComponent,
    WavesComponent,
    // BackgroundHeadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
