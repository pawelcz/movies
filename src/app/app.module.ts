import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'


import { AppComponent } from './app.component'
import { MoviesComponent } from './movies/movies.component'
import { MoviesService } from './movies/movies.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
