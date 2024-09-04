import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel은 이 패키지가 제공
import { CommonModule } from '@angular/common'; // <-- 추가

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // 양방향 데이터 바인딩 제공 (ngModel 사용하려고)
    CommonModule // NgIf, For 사용하려고 (12버전까지는 이와 같은 구조 지시문은 component 파일에서 직접 import 불가능)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
