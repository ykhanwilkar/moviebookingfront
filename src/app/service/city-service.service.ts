import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../model/City';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl = 'http://localhost:8080/city';

  constructor(private http: HttpClient) { }

  listCities(): Observable<City[]> {
    const url = `${this.apiUrl}/list`;
    return this.http.get<City[]>(url);
  }
}
