import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './../../models/movie.model';
import { MyListService } from '../../core/my-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Input()
  movies: Movie[];

  @Input()
  searchQuery: string;

  constructor(
    private mlistService: MyListService
  ) { }

  ngOnInit() {
  }

  onAddToList(movie: Movie) {
    this.mlistService.addItem(movie);
  }

  checkIfItemExists(movie: Movie): boolean {
    const item = this.mlistService.checkIfMovieExistsInList(movie);

    return item ? true : false;
  }

}
