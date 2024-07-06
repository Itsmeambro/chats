import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ChatsComponent } from './chats/chats.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { ChatListComponent } from './chats/chat-list/chat-list.component';
// import { ChatViewComponent } from './chats/chat-view/chat-view.component';


@NgModule({
  declarations: [
    ChatsComponent,
    FriendsComponent,
    ProfileComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
