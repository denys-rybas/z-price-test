import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../Shared/todo.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  private loading = true

  ngOnInit() {
    this.todoService.fetchTodo()
      .pipe(delay(1000)) // added delay for request
      .subscribe(() => {
      this.loading = false
    })
  }

  onChange(id: number) {
    this.todoService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
