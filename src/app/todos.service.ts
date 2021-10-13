import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
   getTodoUrl="https://jsonplaceholder.typicode.com/todos"
  constructor(private http:HttpClient) {

  }

  getAllTodos(){
    return this.http.get<any>(this.getTodoUrl);

  }
}
