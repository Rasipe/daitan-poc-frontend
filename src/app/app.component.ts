import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  apiKey = "feb6f0eeaa0a72662967d77079850353";
  title = 'daitan-poc-frontend';
  movies: Movies[] = [];
  query: string = "";
  page: number = 1;
  totalPages: number = 1;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
  }

  onSearch(query: string) {
    this.query = query;
    this.getMovies();
  }

  onPagination(page: number) {
    this.page = page;
    this.getMovies();
  }

  getMovies() {
    const url = `https://api.themoviedb.org/3/search/movie?&api_key=${this.apiKey}&page=1&query=${this.query}&page=${this.page}`;
    this.http.get(url).subscribe((res: any) => {
      this.movies = res.results
      this.totalPages = res.total_pages
      this.page = res.page
    })
  }

  public onGoTo(page: number): void {
    this.page = page
    this.getMovies();
  }

  public onNext(page: number): void {
    this.page = page + 1
    this.getMovies();
  }

  public onPrevious(page: number): void {
    this.page = page - 1
    this.getMovies();
  }
}

interface Movies {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
