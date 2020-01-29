import {ChangeDetectorRef, Pipe, PipeTransform} from '@angular/core';
import {Todo, TodoService} from './todo.service';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {
  constructor(private todoService: TodoService, private cdref: ChangeDetectorRef) {
  }

  transform(todo: Todo[], searchString: string): Todo[] {
    if (!searchString.trim()) {
      return todo;
    }
    const filteredArray = todo.filter(item => {
      const title = item.title.toLocaleLowerCase(); // indexOf возвращает первый индекс, по которому элемент может быть найден в массиве
      return title.indexOf(searchString.toLocaleLowerCase()) !== -1; // или -1, если такого индекса нет.
    });
    if (!filteredArray.length) {
      this.todoService.noTodos = true
      this.cdref.detectChanges() // problem with displaying Not found message
    } else {
      this.todoService.noTodos = false
      this.cdref.detectChanges() // problem with displaying Not found message
    }
    return filteredArray
  }
}
