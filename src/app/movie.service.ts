import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    { id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi', posterUrl: 'assets/images/inception.jpg' },
    { id: 2, title: 'The Dark Knight', year: 2008, genre: 'Action', posterUrl: 'assets/images/dark-knight.jpg' },
    { id: 3, title: 'Interstellar', year: 2014, genre: 'Sci-Fi', posterUrl: 'assets/images/interstellar.jpg' },
    { id: 4, title: 'Parasite', year: 2019, genre: 'Thriller', posterUrl: 'assets/images/parasite.jpg' },
    { id: 5, title: 'Avengers: Endgame', year: 2019, genre: 'Action', posterUrl: 'assets/images/avengers-endgame.jpg' },
    { id: 6, title: 'Joker', year: 2019, genre: 'Drama', posterUrl: 'assets/images/joker.jpg' },
    { id: 7, title: 'Toy Story 4', year: 2019, genre: 'Animation', posterUrl: 'assets/images/toy-story-4.jpg' },
    { id: 8, title: 'Frozen II', year: 2019, genre: 'Animation', posterUrl: 'assets/images/frozen-ii.jpg' },
    { id: 9, title: '1917', year: 2019, genre: 'War', posterUrl: 'assets/images/1917.jpg' },
    { id: 10, title: 'Ford v Ferrari', year: 2019, genre: 'Drama', posterUrl: 'assets/images/ford-v-ferrari.jpg' }
  ];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

 getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }
}
