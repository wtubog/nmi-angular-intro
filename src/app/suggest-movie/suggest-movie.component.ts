import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuggestMovieService } from './suggest-movie.service';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-suggest-movie',
  templateUrl: './suggest-movie.component.html',
  styleUrls: ['./suggest-movie.component.css'],
  providers: [
    SuggestMovieService
  ]
})
export class SuggestMovieComponent implements OnInit {
  
  isLoading = false;

  constructor(
    private suggestMovieService: SuggestMovieService,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle("Suggest a Movie!")
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    this.suggestMovieService.sendData(form.value)
      .pipe(
        delay(1000)
      )
      .subscribe(
        (d) => {
          this.isLoading = false;
          this.router.navigate(['/']);
        }
      )
  }

}
