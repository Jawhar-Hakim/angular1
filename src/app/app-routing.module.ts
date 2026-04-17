import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from 'src/Services/authGuard';

const routes: Routes = [
  {
    path:"create",
    pathMatch:"full",
    component:MemberFormComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"login"
  },
  {
    path:"login",
    pathMatch:"full",
    component:LoginComponent
  },
  {
    path:"edit/:id",
    pathMatch:"full",
    component:MemberFormComponent
  },
  {
    path:"dashboard",
    pathMatch:"full",
    component:DashboardComponent
  },
  {
    path:"tools",
    pathMatch:"full",
    component:ToolsComponent
  },
  {
    path:"articles",
    pathMatch:"full",
    component:ArticlesComponent
  },
  {
    path:"events",
    pathMatch:"full",
    component:EventsComponent,
    canActivate:[authGuard]
  },
  {
    path:"member",
    pathMatch:"full",
    component:MemberComponent,
    canActivate:[authGuard]
  },
  {
    path:"**",
    component:MemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
