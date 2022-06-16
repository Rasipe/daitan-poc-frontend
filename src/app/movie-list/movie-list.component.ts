import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getImage(poster: string) {
    return `https://image.tmdb.org/t/p/w500${poster}`
  }

}
