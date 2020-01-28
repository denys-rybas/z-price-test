import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../Pages/todo/todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todo: Todo[] = []; // props in Vue
  @Output() onToggle = new EventEmitter<number>() // emit

  constructor() {
  }

  ngOnInit() {
  }

  onChange(id: number) {
    this.onToggle.emit(id)
  }
}
