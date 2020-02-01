import { Component, OnInit } from '@angular/core';
import {Users, UsersService} from '../../Shared/users.service';
import DevExpress from 'devextreme';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  public dataSourceStorage;
  public masterDetails;
  // private temp = [];
  private tempArrWithDetail: [];

  constructor(private usersService: UsersService) {
    this.dataSourceStorage = []
  }

  ngOnInit() {
    this.usersService.fetchUsers();
    this.masterDetails = this.usersService.users
  }
  // getUserDetails(entry) {
  //   console.log(entry)
  //   this.temp.length = 0
  //   this.usersService.users.forEach(value => {
  //     if (value === entry) {
  //       this.temp.push(entry)
  //       console.log(this.temp[0])
  //       return this.temp[0]
  //     }
  //   })
  // }

  getMasterDetails(email) {
    this.tempArrWithDetail = []
    const detail = this.usersService.users.find(i => i.email === email)
    // @ts-ignore
    this.tempArrWithDetail.push(detail)
    let item = this.dataSourceStorage.find((i) => i.key === email);
    if (!item) {
      // @ts-ignore
      item = {
        key: email,
        dataInstance: new DataSource({
          store: {
            data: this.tempArrWithDetail,
            key: 'email',
            type: 'array'
          }
        }),
        filter: ['email', '=', email]
      };
      this.dataSourceStorage.push(item);
    }
    return item.dataInstance
  }

}
