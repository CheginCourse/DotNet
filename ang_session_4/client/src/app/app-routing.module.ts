import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './memebers/member-detail/member-detail.component';
import { MemeberListComponent } from './memebers/memeber-list/memeber-list.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
    {path:'',component:AppComponent},
    {path:"members",component:MemeberListComponent},
    {path:"members/:id",component:MemberDetailComponent},
    {path:"lists",component:ListsComponent},
    {path:"messages",component:MessagesComponent},
    {path:"**",component:HomeComponent},
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
