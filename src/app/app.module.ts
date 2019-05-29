import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './modules/search/search.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseHomeComponent } from './components/base-home/base-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
