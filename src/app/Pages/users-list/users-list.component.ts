import {Component, OnInit} from '@angular/core';
import {Users, UsersService} from '../../Shared/users.service';
import DevExpress from 'devextreme';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public dataSourceStorage;
  public masterDetails;
  private temp = [];

  constructor(private usersService: UsersService) {
    this.dataSourceStorage = []
  }

  ngOnInit() {
    this.usersService.fetchUsers();
    this.masterDetails = this.usersService.users
  }
  getUserDetails(entry) {
    console.log(entry)
    this.temp.length = 0
    this.usersService.users.forEach(value => {
      if (value === entry) {
        this.temp.push(entry)
        console.log(this.temp[0])
        return this.temp[0]
      }
    })
  }

  // getMasterDetails(id) {
  //   console.log(id);
  //   let item = this.dataSourceStorage.find((i) => i.key === id);
  //   if (!item) {
  //     // @ts-ignore
  //     item = {
  //       key: id,
  //       dataInstance: new DataSource({
  //         store: {
  //           data: this.usersService.users,
  //           key: 'id.value',
  //           type: 'array'
  //         }
  //       }),
  //       filter: ['id.value', '=', id]
  //     };
  //     this.dataSourceStorage.push(item);
  //   }
  //   console.log(item);
  //   return item.dataInstance
  // }

}



