import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';
import DevExpress from 'devextreme';
import DataSource from 'devextreme/data/data_source';

export interface Users {
  results: {
    picture: string,
    name: {
      first: string,
      last: string
    }
    gender: string,
    phone: string,
  }
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  private apiUrl = 'https://randomuser.me';
  public selectParameters = {
    id: 'id',
    picture: 'picture',
    name: 'name',
    gender: 'gender',
    city: 'location',
    street: 'location',
    email: 'email',
    phone: 'phone'
  };
  public selectString = [];
  private userSeed = '&seed=5aa7cbd34b03edf5';
  public allowedColumns;
  public users;

  fetchUsers(): Subscription {
    this.selectString = Object.values(this.selectParameters); // get array from obj
    const uniqueSelectQueryString = [...new Set(this.selectString)]; // sting with unique values
    console.log(uniqueSelectQueryString)
    return this.http.get<Users>(this.apiUrl + '/api/?results=100' + this.userSeed + '&inc=' + uniqueSelectQueryString)
      .subscribe(response => {
        this.users = response.results;
        console.log(this.users);
      });
  }

}
