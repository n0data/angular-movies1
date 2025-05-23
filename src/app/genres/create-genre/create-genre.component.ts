import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { firstLetterShouldBeUppercase } from '../../shared/functions/validations';
import { GenreCreationDTO } from '../genres.model';
import { GenresFormComponent } from "../genres-form/genres-form.component";
import { GenresService } from '../genres.service';
import { extractErrors } from '../../shared/functions/extractErrors';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";

@Component({ 
  selector: 'app-create-genre',
  standalone: true,
  imports: [GenresFormComponent, DisplayErrorsComponent] ,
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

  router = inject(Router);

  /*
  da bi poslao novo kreirani zanr MORAMO napraviti instacu koja ce novi zanr poslati u API
  nova instanca genresService
  */
  genresService = inject(GenresService); 
  
  errors: string[]=[];



  saveChanges(genre: GenreCreationDTO){
    //save changes
    //console.log(genre);
    this.genresService.create(genre).subscribe({
      next: () => {
        this.router.navigate(['/genres']);
      },
      error: err =>{
        const errors = extractErrors(err);
        this.errors = errors;
        //console.log(err);
      }


    })
    

  }
  

}


