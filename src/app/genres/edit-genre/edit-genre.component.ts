import { Component, Input, numberAttribute } from '@angular/core';
import { GenreCreationDTO, GenreDTO } from '../genres.model';
import { GenresFormComponent } from "../genres-form/genres-form.component";

@Component({
  selector: 'app-edit-genre',
  standalone: true,
  imports: [GenresFormComponent],
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent {


  @Input({transform: numberAttribute})

  id!:number
  

  model: GenreDTO={id: 1, name: 'Action'};

  saveChanges(genre: GenreCreationDTO){
    console.log('editovanje zanra ', genre);
  }

}
