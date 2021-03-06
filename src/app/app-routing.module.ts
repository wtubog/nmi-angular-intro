import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'suggest-movie',
        loadChildren: './suggest-movie/suggest-movie.module#SuggestMovieModule'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'my-list',
        loadChildren: './my-list/my-list.module#MyListModule'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }