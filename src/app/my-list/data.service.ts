import { Injectable } from '@angular/core';
import { MyListService } from '../core/my-list.service';
import { Movie } from '../models/movie.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private _myList = new BehaviorSubject<Movie[]>(null);
  myList$ = this._myList.asObservable();

  private _selected = new BehaviorSubject<Movie>(null);
  selected$ = this._selected.asObservable();

  selectedMovie: Movie;
  selectedIndex: number = 0;

  constructor(
    private mlistService: MyListService
  ) { 
    this.getList();
  }

  getList() {
    console.log(this.mlistService.getList())
    this._myList.next(this.mlistService.getList());
  }

  setSelected(movie: Movie) {
    this._selected.next(movie);
  }
}
