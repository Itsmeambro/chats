import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatsComponent } from './chats.component';

const routes: Routes = [
  { path:'', component: ChatsComponent,
     children: [
    {path:'',  component:  ChatContainerComponent},
    ]
  }
  // {
  //   path: '', redirectTo: 'view', pathMatch: "full"
  // },
  // {
  //   path: 'view', component: ChatContainerComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule { }
