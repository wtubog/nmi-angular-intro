import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable()
export class MyListService {

  private currentSelectedMovies: Movie[] = [];

  constructor() { }

  addItem(movie: Movie) {
    const item = this.checkIfMovieExistsInList(movie);
    if(!item) {
      this.currentSelectedMovies.push(movie);
    }
  }

  removeItem(idx: number) {
    this.currentSelectedMovies.splice(idx, 1);
  }

  getList() {
    return this.currentSelectedMovies;
  }

  checkIfMovieExistsInList(toBeAdded: Movie) {
    return this.currentSelectedMovies.find((movie) => {
      return movie.id == toBeAdded.id
    });
  }
}
