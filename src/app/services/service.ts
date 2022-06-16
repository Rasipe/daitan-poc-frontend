import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as consts from "./http-consts"

@Injectable()
export class Service {

  constructor(private http: HttpClient) {}

  getMovies(query: string, page: number) {
    const params = `?&api_key=${consts.API_KEY}&page=1&query=${query}&page=${page}`;
    return this.http.get(`${consts.BASE_URL}${consts.SEARCH_MOVIES_ENDPOINT}${params}`)
  }
}
