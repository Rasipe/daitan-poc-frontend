import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movie: any = {};
  @Input() score: number = 0;
  @Input() popularity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getImage() {
    return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
  }

}
