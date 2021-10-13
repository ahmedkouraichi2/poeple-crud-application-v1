import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PoeplelistComponent } from './poeplelist/poeplelist.component';

import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { UpdateUsersComponent } from './update-users/update-users.component';

const routes: Routes = [
 {path:"",component:HomeComponent },
 {path:"todo",component:TodosComponent},
 {path:"login",component:LoginComponent},
 {path:"register",component:RegisterComponent},
 {path:"poeple",component:PoeplelistComponent},
 {path:"add",component:UsersComponent},
 {path:'update-users/:id',component:UpdateUsersComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
