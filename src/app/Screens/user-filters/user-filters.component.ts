import {Component, OnInit} from '@angular/core';

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

  constructor() {
    this.filterData = {
      gender: false,
      city: false,
      street: false,
      email: false,
      phone: false
    };
  }

  ngOnInit() {
    const items = {...localStorage}; // got all localStore data
    this.setValuesFromLocalStorage(items)
  }

  checkboxClick() {
    for (const key in this.filterData) {
      if (this.filterData[key] === true) {
        localStorage.setItem(key, JSON.stringify(true));
      } else {
        localStorage.setItem(key, JSON.stringify(false));
      }
    }
  }

  setValuesFromLocalStorage(localStorageData: object) {
    for (const key in localStorageData) {
      if (JSON.parse(localStorageData[key])) { // if key === true
        this.filterData[key] = true
      } else {
        this.filterData[key] = false
      }
    }
  }

}
