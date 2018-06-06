import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestMovieComponent } from './suggest-movie.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SuggestMovieComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuggestMovieComponent]
})
export class SuggestMovieModule { }
