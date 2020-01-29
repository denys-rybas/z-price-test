import { Component, OnInit } from '@angular/core';
import {Todo, TodoService} from '../../Shared/todo.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss']
})
export class AddTodoFormComponent implements OnInit {

  private title = ''
  private errorMessage = ''

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo() {
    if (this.title.length) {
      this.errorMessage = ''
      const todo: Todo = {
        id: Date.now(),
        title: this.title,
        completed: false
      }
      this.todoService.addTodo(todo)
      this.title = ''
    } else {
      this.errorMessage = 'Title is empty';
    }
  }

}
