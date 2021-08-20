import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/service/city-service.service'; 
import { City } from 'src/app/model/City';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/model/Movie';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities:City[];
  movies:Movie[];

  constructor(private cityService: CityService, private movieService: MovieService) {}

  ngOnInit(): void {
    this.cityService.listCities()
    .subscribe((cities)=> {
      this.cities = cities;
    })  ;
  }

  getMovies(city:City) {
    this.movieService.getMoviesByCity(city)
    .subscribe((movies)=> this.movies = movies);
  }

}
