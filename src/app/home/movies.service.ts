import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { environment } from '../../environments/environment';

@Injectable()
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<Movie[]> {
    return this.http.get<Movie[]>(environment.moviesApi);
  }
}
