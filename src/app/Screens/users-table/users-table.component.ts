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
  private tempArrWithDetail: [];

  constructor(private usersService: UsersService) {
    this.dataSourceStorage = []
  }

  ngOnInit() {
    this.usersService.fetchUsers();
    this.masterDetails = this.usersService.users
  }

  getMasterDetails(picture: string) {
    this.tempArrWithDetail = []
    const detail = this.usersService.users.find(i => i.picture.large === picture)
    // @ts-ignore
    this.tempArrWithDetail.push(detail)
    let item = this.dataSourceStorage.find((i) => i.key === picture);
    if (!item) {
      // @ts-ignore
      item = {
        key: picture,
        dataInstance: new DataSource({
          store: {
            data: this.tempArrWithDetail,
            key: 'picture.large',
            type: 'array'
          }
        }),
        filter: ['picture.large', '=', picture]
      };
      this.dataSourceStorage.push(item);
    }
    return item.dataInstance
  }

}
