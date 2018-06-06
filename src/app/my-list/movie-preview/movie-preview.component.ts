import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent implements OnInit {

  selected$: Observable<Movie>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.selected$ = this.dataService.selected$;
  }

}
