import { Injectable, inject } from '@angular/core';
import { GenreCreationDTO, GenreDTO } from './genres.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor() { }

  private http = inject(HttpClient);
  private baseURL = environment.apiURL + '/genres';

public getAll(): Observable<GenreDTO[]>{
  return this.http.get<GenreDTO[]>(this.baseURL);

} 

//kreiranje nove funkcije za kreiranje novog zanra i dodavanja u bazu
public create(genre: GenreCreationDTO){
  return this.http.post(this.baseURL, genre);
}



}
