import { Component, EventEmitter, OnInit, Output } from '@angular/core';

const terms = {
  search: "Buscar"
}

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  query: string = "";

  get labels() {
    return terms;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    this.search.emit(this.query)
  }

}
