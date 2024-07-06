import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsListComponent } from './chats-list/chats-list.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';


@NgModule({
  declarations: [
  
    ChatsListComponent,
    ChatViewComponent,
    ChatContainerComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule
  ]
})
export class ChatsModule { }
