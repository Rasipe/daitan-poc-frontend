import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component'
import { IconWrapperComponent } from './movie-list/icon-wrapper/icon-wrapper.component';
import { PaginationButtonComponent } from './pagination/pagination-button/pagination-button.component';
import { SearchButtonComponent } from './search-input/search-button/search-button.component'
import { MovieService } from './services/MovieService';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    MovieListComponent,
    PaginationComponent,
    IconWrapperComponent,
    PaginationButtonComponent,
    SearchButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],  
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
