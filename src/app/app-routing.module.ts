import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { WorkspaceComponent } from './sample/workspace/workspace.component';

const routes: Routes = [
  {
    path: "", children: [
      {
        path: '', redirectTo: 'login', pathMatch: "full"
      },
      {
        path: 'signUp', component: SignUpComponent, canActivate: [AuthGuard]
      },
      {
        path: 'login', component: LoginComponent, canActivate: [AuthGuard]
      },
      {
        path: 'works', component: WorkspaceComponent, canActivate: [AuthGuard]
      },
      { 
        path: 'home', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule), canActivate: [AuthGuard]
      },
      // {
      //   path: '**', component: NotFoundComponent, canActivate: [AuthGuard]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
