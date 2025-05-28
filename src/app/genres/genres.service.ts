import { Injectable, inject } from '@angular/core';
import { GenreCreationDTO, GenreDTO } from './genres.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaginationDTO } from '../shared/models/PaginationDTO';
import { buildQueryParams } from '../shared/functions/buildQueryParams';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor() { }

  private http = inject(HttpClient);
  private baseURL = environment.apiURL + '/genres';

public getPaginated(pagination: PaginationDTO): Observable<HttpResponse<GenreDTO[]>> {
  let queryParams = buildQueryParams(pagination);
  return this.http.get<GenreDTO[]>(this.baseURL, {params: queryParams, observe: 'response'});

} 


public getById(id:number): Observable<GenreDTO>{
  return this.http.get<GenreDTO>(`${this.baseURL}/${id}`);

}



//kreiranje nove funkcije za kreiranje novog zanra i dodavanja u bazu
public create(genre: GenreCreationDTO){
  return this.http.post(this.baseURL, genre);
}

public update(id: number, genre: GenreCreationDTO){
  return this.http.put(`${this.baseURL}/${id}`, genre);
}

public delete(id:number){
  return this.http.delete(`${this.baseURL}/${id}`);
}




}
