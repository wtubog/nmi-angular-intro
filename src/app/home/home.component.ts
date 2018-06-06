import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    MoviesService
  ]
})
export class HomeComponent implements OnInit {
  
  private movies: Movie[];
  private _moviesList = new BehaviorSubject<Movie[]>([]);

  moviesList$ = this._moviesList.asObservable();
  
  searchQuery: string;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.moviesService.getData()
      .subscribe(moviesList => {
        this.movies = moviesList;
        this._moviesList.next(moviesList);
      });
  }

  onSearch(query: string) {
    const _query = query.toLowerCase();
      this.searchQuery = _query;
      const filteredMoviesList = this.movies.filter((movie) => {
        return movie.title.toLowerCase().indexOf(_query) > -1 ||
          movie.synopsis.toLowerCase().indexOf(_query) > -1
      });

      if(filteredMoviesList.length) {
        this._moviesList.next(filteredMoviesList); 
      } else {
        this._moviesList.next([]);
      }
  }

}
