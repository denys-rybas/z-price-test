import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from './Pages/users-list/users-list.component';
import {AboutUsComponent} from './Pages/about-us/about-us.component';
import {HomeComponent} from './Pages/home/home.component';
import {TodoComponent} from './Pages/todo/todo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'about', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  HomeComponent,
  UsersListComponent,
  TodoComponent,
  AboutUsComponent
];
