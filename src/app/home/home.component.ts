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

  private _moviesList = new BehaviorSubject<Movie[]>([]);

  moviesList$ = this._moviesList.asObservable();

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.moviesService.getData()
      .subscribe(moviesList => {
        this._moviesList.next(moviesList);
      });
  }

}
