import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponentComponent } from './search-component/search-component.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { SearchHighlightPipe } from './search-highlight.pipe';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent, 
    SearchComponentComponent, 
    MoviesListComponent, 
    SearchHighlightPipe
  ]
})
export class HomeModule { }
