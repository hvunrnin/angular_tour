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

  getHero(id: number): Observable<Hero> {
    // 지금은 히어로의 `id` 프로퍼티가 항상 존재한다고 간주합니다.
    // 에러를 처리하는 방법은 다음 튜토리얼에 대해 알아봅니다.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
