import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { firstLetterShouldBeUppercase } from '../../shared/functions/validations';
import { GenreCreationDTO } from '../genres.model';
import { GenresFormComponent } from "../genres-form/genres-form.component";

@Component({
  selector: 'app-create-genre',
  standalone: true,
  imports: [GenresFormComponent] ,
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

  router = inject(Router);

  saveChanges(genre: GenreCreationDTO){
    //save changes
    console.log(genre);
    this.router.navigate(['/genres']);

  }
  

}


