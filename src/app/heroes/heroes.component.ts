import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


// Angular 컴포넌트를 선언하려면 반드시 Angular 코어 라이브러리에서 Component 심볼을 로드하고 컴포넌트 클래스에 @Component 와 같이 지정
// ng generate 명령을 실행하면 기본적으로 3개의 메타데이터 프로퍼티를 생성
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// ngOnInit은 라이프싸이클 후킹 함수. Angular는 컴포넌트를 생성한 직후에 ngOnInit를 호출
// 컴포넌트 초기화하는 로직 해당 메소드에 작성하기
// export class HeroesComponent implements OnInit {

//   hero = 'Windstorm';

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}