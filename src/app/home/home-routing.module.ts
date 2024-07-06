import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChatsComponent } from './chats/chats.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent, children: [
      {
        path: '', redirectTo: 'chats', pathMatch: 'full'
      },
      // {
      //   path: 'chats', component: ChatsComponent
      // },
      { path: 'chats', loadChildren: () => import(`./chats/chats.module`).then(m => m.ChatsModule) },
      { path: 'friends', loadChildren: () => import(`./friends/friends.module`).then(m => m.FriendsModule) },
      { path: 'chats', loadChildren: () => import(`./profile/profile.module`).then(m => m.ProfileModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
