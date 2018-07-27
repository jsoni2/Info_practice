import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RaciComponent} from './raci/raci.component';
import {AuthGuard} from './auth.guard';
import { UserComponent } from './user/user.component';
//import { GroupComponent } from './group/group.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'signup',
    component: UserComponent,
    children: [{path: '', component: SignupComponent}]
  },
  {
    path: 'login',
    component: UserComponent,
    children: [{path: '', component: LoginComponent}]
  },
  {
    path: 'raci',
    component: RaciComponent,canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login',
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
