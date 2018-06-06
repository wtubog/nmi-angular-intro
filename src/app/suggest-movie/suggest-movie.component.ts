import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-suggest-movie',
  templateUrl: './suggest-movie.component.html',
  styleUrls: ['./suggest-movie.component.css']
})
export class SuggestMovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
