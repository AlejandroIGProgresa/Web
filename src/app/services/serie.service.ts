import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Serie} from "../../../../Api/src/series/interfaces/serie/serie.interface";

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  API_URI = 'http://localhost:3000/api/series/';
  constructor(private http: HttpClient) { }
  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.API_URI);
  }
  getSerie(id: string): Observable<Serie> {
    return this.http.get<Serie>(this.API_URI + id);
  }
  addSerie(serie: Serie): Observable<any> {
    return this.http.post<any>(this.API_URI + 'register/', serie);
  }
  updateSerie(serie: Serie): Observable<any> {
    return this.http.put<any>(this.API_URI + 'update/' + serie._id, serie);
  }
  deleteSerie(id: string): Observable<any> {
    return this.http.delete<any>(this.API_URI + 'delete/' + id);
  }
}

