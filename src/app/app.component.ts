import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'daitan-poc-frontend';
  movies: [] = [];
  
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(query: string = "") {
    console.log(query);
    this.http.get('./assets/result.json').subscribe((res: any) => {
      this.movies = res.results
    })
  }
}
