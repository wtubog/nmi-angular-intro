import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestMovieComponent } from './suggest-movie.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SuggestMovieComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [SuggestMovieComponent]
})
export class SuggestMovieModule { }
