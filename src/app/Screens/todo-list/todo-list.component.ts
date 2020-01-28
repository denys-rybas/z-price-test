import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../Shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.todo = [
      {id: 1, title: 'Complete task #1', completed: false, date: new Date()},
      {id: 2, title: 'Complete task #2', completed: true, date: new Date()},
      {id: 3, title: 'Complete task #3', completed: false, date: new Date()}
    ];
  }

  onChange(id: number) {
    this.todoService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
