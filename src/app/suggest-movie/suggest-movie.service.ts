import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SuggestMovieService {

  constructor(
    private http: HttpClient
  ) { }

  sendData(movie: Movie): Observable<any> {
    return this.http.post(environment.moviesApi, movie);
  }
}
