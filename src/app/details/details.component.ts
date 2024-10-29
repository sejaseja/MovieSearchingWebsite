import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="movie.posterUrl" alt="Picture of the movie">
      <h2 class="listing-heading">{{movie.title}}</h2>
      <p class="listing-location">{{movie.year}} - {{movie.genre}}</p>
    </section>
  `,
  styles: [`
    .listing {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
    .listing-photo {
      width: 100%;
      height: auto;
    }
    .listing-heading {
      font-size: 1.2em;
      margin: 10px 0;
    }
    .listing-location {
      font-size: 1em;
      color: #777;
    }
  `]
})
export class MovieDetailsComponent {
  @Input() movie!: Movie;
}
