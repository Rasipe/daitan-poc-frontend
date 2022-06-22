import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieService } from '../services/MovieService';

const terms = {
  search: "Buscar"
}

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  query: string = "";

  get labels() {
    return terms;
  }

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.service.getQuery().subscribe(res => this.query = res)
  }

  onSearch(): void {
    this.service.setQuery(this.query);
  }

}
