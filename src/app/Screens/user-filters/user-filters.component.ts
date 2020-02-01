import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../Shared/users.service';

export interface FilterData {
  gender: boolean;
  city: boolean;
  street: boolean;
  email: boolean;
  phone: boolean;
}

@Component({
  selector: 'app-user-filters',
  templateUrl: './user-filters.component.html',
  styleUrls: ['./user-filters.component.scss']
})
export class UserFiltersComponent implements OnInit {

  public filterData: FilterData;

  constructor(private usersService: UsersService) {
    this.filterData = {
      gender: true,
      city: false,
      street: false,
      email: false,
      phone: true
    };
  }

  ngOnInit() {
    const items = {...localStorage}; // got all localStore data
    this.setValuesFromLocalStorage(items);
  }

  checkboxClick() {
    for (const key in this.filterData) {
      if (this.filterData[key] === true) {
        localStorage.setItem(key, JSON.stringify(true));
        this.addQueryParameters(key);
      } else {
        localStorage.setItem(key, JSON.stringify(false));
        this.deleteQueryParameters(key);
      }
    }
    this.usersService.fetchUsers()
  }

  setValuesFromLocalStorage(localStorageData: object) {
    for (const key in localStorageData) {
      this.filterData[key] = !!JSON.parse(localStorageData[key]); // set true or false into filterData object
    }
    this.usersService.allowedColumns = this.filterData;
  }

  deleteQueryParameters(key: string) {
    delete this.usersService.selectParameters[key];
  }
  addQueryParameters(key: string) {
    if (key === 'city' || key === 'street') {
      this.usersService.selectParameters[key] = 'location';
    } else {
      this.usersService.selectParameters[key] = key;
    }
  }

}
