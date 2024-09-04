import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent{

  // Angular가 MessagesComponent의 인스턴스를 생성할 때 MessageService의 싱글턴 인스턴스를 이 프로퍼티로 전달
  // Angular에서는 public으로 선언된 컴포넌트 프로퍼티만 바인딩 가능
  constructor(public messageService: MessageService) { }

  // ngOnInit(): void {
  // }

}
