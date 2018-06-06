import { Component, OnInit } from '@angular/core';
import { MyListService } from '../core/my-list.service';
import { Movie } from '../models/movie.model';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
  providers: [ DataService ]
})
export class MyListComponent implements OnInit {

  myList$: Observable<Movie[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.myList$ = this.dataService.myList$;
  }

  onSelect(movie: Movie) {
    this.dataService.setSelected(movie);
  }

}
