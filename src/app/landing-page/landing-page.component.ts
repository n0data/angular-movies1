import { Component } from '@angular/core';
import { MoviesListComponent } from "../movies/movies-list/movies-list.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

   
upcomingReleasesMovies: any;
inTheatersMovies: any;

constructor(){
  setTimeout(()=> {
  
    this.inTheatersMovies=[
      
    {
      title: 'Spide man',
      releaseDate: new Date(),
      price: 4165,
      poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
    },
    {
      title: 'Spide man',
      releaseDate: new Date(),
      price: 4165,
      poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
    },
  ]
  
  this.upcomingReleasesMovies=[
   {
    title: 'monana an',
    releaseDate: new Date("2016-05-03"),
    price: 416,
    poster: 'https://upload.wikimedia.org/wikipedia/en/5/56/Moana_%28character%29.png'
   },
   {
    title: 'Spide man',
    releaseDate: new Date(),
    price: 4165,
    poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
  },
  
  ]

  },100)
}

}
