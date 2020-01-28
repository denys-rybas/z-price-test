import {Component, OnInit} from '@angular/core';

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todo: Todo[] = [
    {id: 1, title: 'Complete task #1', completed: false, date: new Date()},
    {id: 2, title: 'Complete task #2', completed: true, date: new Date()},
    {id: 3, title: 'Complete task #3', completed: false, date: new Date()}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onToggle(id: number) {
    // tslint:disable-next-line:no-unused-expression
    const index = this.todo.findIndex(item => item.id === id)
    this.todo[index].completed = !this.todo[index].completed // true / false
  }
}
