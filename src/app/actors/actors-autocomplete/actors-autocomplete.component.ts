import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActorCreationDTO, ActorsAutocompleteDTO } from '../actors.models';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable, MatTableModule } from '@angular/material/table';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-actors-autocomplete',
  standalone: true,
  imports: [MatFormFieldModule, MatAutocompleteModule, ReactiveFormsModule, MatIconModule, FormsModule, 
    MatTableModule, MatInputModule, DragDropModule],
  templateUrl: './actors-autocomplete.component.html',
  styleUrl: './actors-autocomplete.component.css'
})
export class ActorsAutocompleteComponent implements OnInit{



  actors: ActorsAutocompleteDTO[] = [
    {id: 1, name: 'Tom Holland', character: '',
       picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/330px-Tom_Holland_by_Gage_Skidmore.jpg'},
    {id: 2, name: 'Tom Hanks', character: '',
       picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/220px-Tom_Hanks_TIFF_2019.jpg' },
    {id: 3, name: 'Samuel L. Jackson', character: '', 
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/250px-SamuelLJackson.jpg' }
  ]

  actorsOriginal=this.actors;
 

  @Input({required: true})
  selectedActors: ActorsAutocompleteDTO[]=[];

  control = new FormControl();

  columnsToDisplay= ['image', 'name', 'character', 'actions'];

  @ViewChild(MatTable)
  table!: MatTable<ActorsAutocompleteDTO>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.actors = this.actorsOriginal;
      this.actors= this.actors.filter(actor => actor.name.indexOf(value) !== -1);
    })
  }

  handleSelection(event: MatAutocompleteSelectedEvent){
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined){
      this.table.renderRows();
      }
    }
  


  delete(actor: ActorsAutocompleteDTO){
    const index = this.selectedActors.findIndex((a: ActorsAutocompleteDTO)=> a.id === actor.id);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();
    }

  handleDrop(event: CdkDragDrop<any[]>){
    const previousIndex = this.selectedActors.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.selectedActors, previousIndex, event.currentIndex);
    this.table.renderRows();


  }






}
