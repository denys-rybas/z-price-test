import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstScreenComponent } from './Screens/first-screen/first-screen.component';
import { TodoListComponent } from './Screens/todo-list/todo-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddTodoFormComponent } from './Screens/add-todo-form/add-todo-form.component';
import {FormsModule} from '@angular/forms';
import { TodoFilterComponent } from './Screens/todo-filter/todo-filter.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TodoFilterPipe } from './Shared/todo-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    FirstScreenComponent,
    TodoListComponent,
    AddTodoFormComponent,
    TodoFilterComponent,
    TodoFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
