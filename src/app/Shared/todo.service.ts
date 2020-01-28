import {Injectable} from '@angular/core';

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
  }

  public todo: Todo[] = [];

  onToggle(id: number) {
    const index = this.todo.findIndex(item => item.id === id);
    this.todo[index].completed = !this.todo[index].completed; // true / false
  }

  removeTodo(id: number) {
    const index = this.todo.findIndex(i => i.id === id);
    this.todo = this.todo.filter(i => i.id !== id); // return all items without equal id
  }
}
