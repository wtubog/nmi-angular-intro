import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './../../models/movie.model';

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

  constructor() { }

  ngOnInit() {
  }

}
