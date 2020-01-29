import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Todo {
  id: number
  title: string
  completed: boolean
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  public todo: Todo[] = [];
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  public searchString = ''
  public noTodos = false

  onToggle(id: number) {
    const index = this.todo.findIndex(item => item.id === id);
    this.todo[index].completed = !this.todo[index].completed; // true / false
  }

  removeTodo(id: number) {
    const index = this.todo.findIndex(i => i.id === id);
    this.todo = this.todo.filter(i => i.id !== id); // return all items without equal id
  }

  fetchTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl + '/todos?_limit=7')
      .pipe(tap(response => this.todo = response))  // .smth like then()
  }

  addTodo(todo: Todo) {
    this.todo.unshift(todo)
  }

}
