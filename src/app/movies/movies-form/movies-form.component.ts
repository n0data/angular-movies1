import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MovieCreationDTO, MovieDTO } from '../movies.models';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import moment from 'moment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputImgComponent } from '../../shared/components/input-img/input-img.component';

@Component({
  selector: 'app-movies-form',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule,RouterLink,MatDatepickerModule,
    InputImgComponent
  ],
  templateUrl: './movies-form.component.html',
  styleUrl: './movies-form.component.css'
})
export class MoviesFormComponent  implements OnInit{

  @Input()
  model?: MovieDTO;

  @Output()
  postForm = new EventEmitter<MovieCreationDTO>();

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    title: ['',{validators: [Validators.required]}],
    releaseDate: new FormControl<Date | null>(null),
    trailer:'',
    poster: new FormControl<File | string | null>(null)
  });

  


  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);

    }

  }

  handleFileSelection(file:File){
    this.form.controls.poster.setValue(file);
  }

  getErrorMessagesForTitle():string{
    const field = this.form.controls.title;

    if(field.hasError('required')){
      return "The title field is required";
    }

    return ""; 
  }

  saveChanges(){
    const movie = this.form.value as MovieCreationDTO;

    if(movie.releaseDate){
      movie.releaseDate = moment(movie.releaseDate).toDate();

    }

    this.postForm.emit(movie);

  }

}
