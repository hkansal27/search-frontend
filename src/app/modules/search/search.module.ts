import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [SearchContainerComponent]
})
export class SearchModule { }
