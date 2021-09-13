import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../shared/models/film';
import { FilmService } from '../shared/services/film.service';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.sass']
})
export class SingleFilmComponent implements OnInit {

  film!: Film;
  id!: number;

  constructor(private filmService: FilmService, private route: ActivatedRoute) { 
    this.id = Number(this.route.snapshot.paramMap.get("id"))
  }

  ngOnInit(): void {
    this.filmService.getSingleFilm(this.id).subscribe((film: Film) => {
      this.film = film;
      console.log(film)
    })
  }

}
