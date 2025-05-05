import { Component, Input, numberAttribute } from '@angular/core';
import { TheaterCreationDTO, TheaterDTO } from '../theaters.models';
import { TheatersFormComponent } from "../theaters-form/theaters-form.component";

@Component({
  selector: 'app-edit-theater',
  standalone: true,
  imports: [TheatersFormComponent],
  templateUrl: './edit-theater.component.html',
  styleUrl: './edit-theater.component.css'
})
export class EditTheaterComponent {

  @Input({transform: numberAttribute})

  id!:number


  model: TheaterDTO = {name: 'Acropolis', id: 1, latitude: 45.263840081281856, longitude: 19.85184430903955};


  saveChanges(theater: TheaterCreationDTO){
    console.log('editovanje bioskopa', theater);
  }


}
