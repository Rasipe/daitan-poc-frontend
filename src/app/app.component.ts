import { Component, OnInit } from '@angular/core';
import { Service } from "./services/service"

const terms = {
  noData: "Nenhum resultado encontrado para a pesquisa"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'daitan-poc-frontend';
  movies: Movies[] = [];
  query: string = "";
  page: number = 1;
  totalPages: number = 1;
  notFound: boolean = false;

  get labels() {
    return terms;
  }

  constructor(private service: Service) {}

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

  private getMovies() {
    this.service.getMovies(this.query, this.page).subscribe((res: any) => {
      this.notFound = res.results.length == 0;
      this.movies = res.results
      this.totalPages = res.total_pages
      this.page = res.page
    })
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
