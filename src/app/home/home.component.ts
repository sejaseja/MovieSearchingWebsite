import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';

import { MovieDetailsComponent} from '../details/details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MovieDetailsComponent],
  template: `
    <section>
    <form (submit)="searchMovies(searchTerm.value); $event.preventDefault()">
  <input type="text" placeholder="Filter by genre or title" #searchTerm>
  <button type="submit">Search</button>
</form>


    </section>
    <button *ngIf="showBackButton" (click)="resetSearch()">Back to All Movies</button>
    <section class="results">
  <app-movie-details
    *ngFor="let movie of filteredMovies"
    [movie]="movie">
  </app-movie-details>
</section>

  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieList: Movie[] = [];
  filteredMovies: Movie[] = [];
  showBackButton: boolean = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieList = this.movieService.getMovies();
    this.filteredMovies = this.movieList;
    console.log("Initial Movies:", this.movieList); // Debug initial movie load
  }
  
  searchMovies(searchValue: string): void {
    searchValue = searchValue.toLowerCase();
    this.filteredMovies = this.movieList.filter(movie =>
      movie.title.toLowerCase().includes(searchValue) || movie.genre.toLowerCase().includes(searchValue)
    );
    this.showBackButton = true;  // Show the back button after search
  }

  resetSearch(): void {
    this.filteredMovies = this.movieList;  // Reset to original list
    this.showBackButton = false;  // Hide the back button
  }
  
  
}
