import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {TodoService} from '../../Shared/todo.service';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent implements OnInit {

  search = faSearch // search icon

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

}
