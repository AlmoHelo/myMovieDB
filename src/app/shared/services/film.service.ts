import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]>{
    return this.http.get<Film[]>(`${environment.netflix_url}`);
  }

  getSingleFilm(id: number): Observable<Film>{
    return this.http.get<Film>(`${environment.oneFilm_url}${id}?api_key=87dfa1c669eea853da609d4968d294be`)
  }
}
