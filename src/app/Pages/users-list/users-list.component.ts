import {Component, OnInit} from '@angular/core';
import {Users, UsersService} from '../../Shared/users.service';
import DevExpress from 'devextreme';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  constructor(private usersService: UsersService) {
  }


  ngOnInit() {
    this.usersService.fetchUsers();
  }

}



