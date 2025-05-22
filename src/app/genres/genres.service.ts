import { Injectable, inject } from '@angular/core';
import { GenreDTO } from './genres.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor() { }

  private http = inject(HttpClient);

public getAll(): Observable<GenreDTO[]>{
  return this.http.get<GenreDTO[]>("https://localhost:7002/api/genres");

} 



}
