import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 getAllUsersUrl="https://backend-people-crud-app.herokuapp.com/users/";

 deleteUserUrl="https://jsonplaceholder.typicode.com/users/"

 addUserUrl="https://backend-people-crud-app.herokuapp.com/users/add";
 gesiterUserUrl="https://backend-people-crud-app.herokuapp.com/users/register";
 private LoginUrl="https://backend-people-crud-app.herokuapp.com/users/login"


  constructor(private http:HttpClient) {

   }
   getAllUsers(){
     return  this.http.get<any>(this.getAllUsersUrl);

   }

   deleteUsers(id:string){
     return this.http.delete<any>(this.deleteUserUrl+id)
   }
   //post
   addUers(user:User){
     return this.http.post<any>(this.addUserUrl,user);


   }
   gesisterAdmin(user:User){
     return this.http.post<any>(this.gesiterUserUrl,user)
    }
    loginAdmin(user:User){
      return this.http.post<any>(this.LoginUrl,user)
    }



}
