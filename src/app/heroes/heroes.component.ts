import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

// Angular 컴포넌트를 선언하려면 반드시 Angular 코어 라이브러리에서 Component 심볼을 로드하고 컴포넌트 클래스에 @Component 와 같이 지정
// ng generate 명령을 실행하면 기본적으로 3개의 메타데이터 프로퍼티를 생성
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// ngOnInit은 라이프싸이클 후킹 함수. Angular는 컴포넌트를 생성한 직후에 ngOnInit를 호출
// 컴포넌트 초기화하는 로직 해당 메소드에 작성하기

export class HeroesComponent implements OnInit{
  // heroes = HEROES;
  // selectedHero?: Hero;

  // selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected heri id=${hero.id}`);
  // }

  // 현재 동기 방식으로 동작하는데, 실제로는 서버의 응답을 기다려서 비동기로 동작해야함.
  // 비동기 동작은 콜백 함수, promise, Observable 반환하도록 처리 가능. (여기선 Observable로 처리, HttpClient.get 메소드가 observable 반환하므로 이게 자연스러움)
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}