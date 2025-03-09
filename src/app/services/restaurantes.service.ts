import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurantes } from '../interfaces/restaurant.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  private apiUrl = 'http://localhost:3000/restaurantes'

  constructor( private http: HttpClient) { }

  getAllRestaurantes(): Observable<Restaurantes[]>{
    return this.http.get<Restaurantes[]>(this.apiUrl);
  }
}
