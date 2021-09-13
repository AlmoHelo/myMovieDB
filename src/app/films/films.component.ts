import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/models/film';
import { FilmService } from '../shared/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.sass']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((film: any) => {
      this.films = film.results;
      console.log(this.films)
    })
  }

}
