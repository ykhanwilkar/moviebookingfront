import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../model/City';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMoviesByCity(city:City): Observable<Movie[]> {
    const url = 'localhost:8080/movie/list';
    return this.http.post<Movie[]>(url, city);
  }
}
