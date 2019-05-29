import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [SearchContainerComponent, SearchInputComponent, SearchResultComponent]
})
export class SearchModule { }
