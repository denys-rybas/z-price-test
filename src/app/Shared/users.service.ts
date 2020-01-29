import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Users {
  image: string,
  name: string,
  gender: string,
  phone: string,
  city: string,
  street: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  private apiUrl = 'https://randomuser.me';
  private userSeed = '5aa7cbd34b03edf5'
  public users: Users = {};

  fetchUsers(): Subscription {
    return this.http.get<Users>(this.apiUrl + '/api/?results=100&seed=' + this.userSeed)
      .subscribe(response => {
        this.users = response
        console.log(this.users)
      })
  }
}
