import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators'

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {
  }

  public getAllMovies(): Observable<any> {
    return this.http.get('././assets/movies.json')
      .pipe(
        map(movies => movies['Movies']))
  }

  public getMoviesFiltered(searchCountry: string, searchWriter: string, searchGenre: string): Observable<any> {
    return this.getAllMovies()
      .pipe(
        map(movies => movies.filter(movie =>
          (searchCountry ? movie['Country'].includes(searchCountry) : true) &&
          (searchWriter ? movie['Writer'].includes(searchWriter) : true) &&
          (searchGenre ? movie['Genre'].includes(searchGenre) : true)
        )))
  }

}
