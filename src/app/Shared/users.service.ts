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
  private selectParameters = '&inc=id,picture,name,gender,phone,location,email'
  private userSeed = '&seed=5aa7cbd34b03edf5';
  public users;
  public allowedColumns;

  fetchUsers(): Subscription {
    return this.http.get<Users>(this.apiUrl + '/api/?results=100' + this.userSeed + this.selectParameters)
      .subscribe(response => {
        this.users = response.results;

        console.log(this.users);
      });
  }

}
