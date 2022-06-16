import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { IMovie } from '../models/Movie';
import { HttpClient } from "@angular/common/http";
import * as consts from "./http-consts"


@Injectable()
export class MovieService {

  private moviesData = new BehaviorSubject<IMovie[]>([]);
  private totalPagesData = new BehaviorSubject<number>(0);
  private pageData = new BehaviorSubject<number>(1);
  private queryData = new BehaviorSubject<string>("");
  private seachedData = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  async searchMovies() {
    this.seachedData.next(true);

    const page = await firstValueFrom(this.getPage());
    const query = await firstValueFrom(this.getQuery());
    const params = `?&api_key=${consts.API_KEY}&page=1&query=${query}&page=${page}`;
    
    const res: any = await firstValueFrom(this.http.get(`${consts.BASE_URL}${consts.SEARCH_MOVIES_ENDPOINT}${params}`))
    this.moviesData.next(res.results);
    this.totalPagesData.next(res.total_pages);
    this.pageData.next(res.page);
  }

  getMovies(): Observable<IMovie[]> {
    return this.moviesData.asObservable();
  }

  getTotalPages(): Observable<number> {
    return this.totalPagesData.asObservable();

  }
  getPage(): Observable<number>  {
    return this.pageData.asObservable();
  }

  setPage(page: number) {
    this.pageData.next(page);
    this.searchMovies();
  }

  getQuery(): Observable<string> {
    return this.queryData.asObservable();
  }

  setQuery(query: string) {
    this.queryData.next(query);
    this.searchMovies();
  }

  getSeached(): Observable<boolean> {
    return this.seachedData.asObservable();
  }

}