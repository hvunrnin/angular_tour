import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// 해당 데코레이터를 통해 클래스가 의존성 주입 시스템에 포함되는 클래스라고 선언
// HeroService 클래스는 의존성으로 주입될 수 있으며 이 클래스도 의존성을 주입 가능
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // MessageService는 HeroService에 의존성으로 주입되고, HeroService는 다시 HeroesComponent에 의존성으로 주입
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
