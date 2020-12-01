import { Component, OnInit } from '@angular/core'
import { MoviesService } from './movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[]
  attributes: string[]
  columns = ['Poster', 'Title', 'Year', 'Country', 'Genre', 'Director']
  countries: string[]
  writers: string[]
  genres: string[]
  selectedCountry: string
  selectedWriter: string
  selectedGenre: string

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe(movies => {
      this.movies = movies
      this.attributes = Object.keys(this.movies[0])
      this.countries = this.getSortedValuesFor('Country')
      this.writers = this.getSortedValuesFor('Writer')
      this.genres = this.getSortedValuesFor('Genre')
      this.selectedCountry = ''
      this.selectedWriter = ''
      this.selectedGenre = ''
    })
  }

  collapse(i: number) {
    this.movies[i].collapsed = !this.movies[i].collapsed
  }

  search() {
    this.moviesService.getMoviesFiltered(this.selectedCountry, this.selectedWriter, this.selectedGenre).subscribe(movies =>
      this.movies = movies
    )
  }

  private getSortedValuesFor(attribute: string): any[] {
    return Array.from(
      new Set(this.movies
        .map(movie => movie[attribute])
        .reduce((acc, value) => acc.concat(value.split(',')), [])
        .map(value => value.trim()))
    ).sort()
  }
}
