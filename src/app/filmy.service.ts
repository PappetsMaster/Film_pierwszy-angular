import { Injectable } from '@angular/core';
import { Film } from './modele/film';


@Injectable({
  providedIn: 'root'
})
export class FilmyService {

private filmy: Film[] = [
  {id: 0, tytul: 'hobbit', opis: 'Hobbit Bilbo Baggins, przy udziale czarodzieja Gandalfa, dołącza do kompanii krasnoludów pod dowództwem Thorina Dębowej Tarczy. Celem ich wyprawy jest wydarcie Samotnej Góry i jej bogactw spod władzy smoka Smauga.', rok: 2012},
  {id: 1, tytul: 'whiplash', opis: 'Młody i ambitny perkusista za wszelką cenę pragnie dołączyć do czołówki najwybitniejszych artystów muzyki jazzowej.', rok: 2014},
  {id: 2, tytul: 'harry Potter', opis: 'Ekranizacja megapopularnej serii książek J.K. Rowling, której akcja rozgrywa się w świecie czarodziejów istniejącym równolegle do świata niemagicznego.', rok: 2023},
]


  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }
  
  getFilm(id: number): Film {
    return this.filmy[id];
  }
}
