import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroes= of(HEROES);
    this.messageService.addMessage("HeroService: Fetched Heroes");
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero= HEROES.find(h=> h.id===id)!;
    this.messageService.addMessage(`HeroService: fetched hero with id ${id}`);
    return of(hero);
  }

  constructor(private messageService: MessageService) { }
}
