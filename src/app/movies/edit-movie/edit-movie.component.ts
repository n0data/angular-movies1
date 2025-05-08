import { Component, Input, numberAttribute } from '@angular/core';
import { MovieCreationDTO, MovieDTO } from '../movies.models';
import { MoviesFormComponent } from "../movies-form/movies-form.component";
import { MultipleSelectorDTO } from '../../shared/components/multiple-selector/MultipleSelectorDTO';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [MoviesFormComponent],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {

  @Input({transform: numberAttribute})

  id!:number

  model: MovieDTO = {id: 1, title: 'Spider man', releaseDate: new Date('2020-07-09'), trailer: 'abcs',
      poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'}

  nonSelectedGenres: MultipleSelectorDTO[] =[
    {key: 1, description: 'Drama'},
    
    {key: 3, description: 'Comedy'},
  ]

  selectedGenres: MultipleSelectorDTO[]=[
    {key: 2, description: 'Action'},
  ];

  nonSelectedTheaters: MultipleSelectorDTO[] =[
    {key: 1, description: 'Acropolis'}
    
     
  ]

  selectedTheaters: MultipleSelectorDTO[]=[
    {key: 2, description: 'Agora'}
  ];


saveChanges(movie: MovieCreationDTO){
  console.log('editing movie',movie);

}



} 
