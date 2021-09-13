import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { SeriesComponent } from './series/series.component';
import { SingleFilmComponent } from './single-film/single-film.component';

const routes: Routes = [
  {path: "films", component: FilmsComponent},
  {path: "series", component: SeriesComponent},
  {path: "films/:id", component: SingleFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
