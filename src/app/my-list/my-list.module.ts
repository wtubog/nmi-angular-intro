import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListComponent } from './my-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MyListGuard } from '../core/my-list.guard';
import { HighlightDirective } from './highlight.directive';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';

const routes: Routes = [
  {
    path: '',
    component: MyListComponent,
    canActivate: [ MyListGuard ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MyListComponent,
    HighlightDirective,
    MoviePreviewComponent
  ]
})
export class MyListModule { }
