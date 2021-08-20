import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { City } from 'src/app/model/City';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  @Input() city: City;
  @Output() onClickGetMovies: EventEmitter<City> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    //console.log(this.city);
  }

  getImgSource() {
    return `../../assets/images/${this.city.city}.jpg`;

  }

  onClickGetMovieList(city: City) {
    this.onClickGetMovies.emit(city);
  }
  
}
