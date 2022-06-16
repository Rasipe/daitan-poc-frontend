import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../models/Movie';
import { MovieService } from '../services/MovieService';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.service.getMovies().subscribe(res => {
      this.movies = res;
    })
  }

  getImage(poster: string) {
    return `https://image.tmdb.org/t/p/w500${poster}`
  }

}
