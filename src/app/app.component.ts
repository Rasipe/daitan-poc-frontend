import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from './models/Movie';
import { MovieService } from "./services/MovieService"

const terms = {
  noData: "Nenhum resultado encontrado para a pesquisa"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'daitan-poc-frontend';
  movies: IMovie[] = [];
  query: string = "";
  page: number = 1;
  totalPages: number = 1;
  searched: boolean = false;
  hasMovie: boolean = false;

  get labels() {
    return terms;
  }

  get notFound() {
    return this.searched && !this.hasMovie;
  }

  constructor(
    private service: MovieService
  ) { }

  ngOnInit(): void {
    this.service.getMovies().subscribe(res => this.hasMovie = res.length > 0)
    this.service.getSearched().subscribe(res => this.searched = res)
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
    this.searched = true;
    this.service.searchMovies();
  }
}
