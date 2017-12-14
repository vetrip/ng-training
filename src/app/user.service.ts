import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { User } from './user/user';
import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private userMgmtServiceUrl = 'http://localhost:8003/lbm-web/lbs/api/user';

  constructor(private httpClient: HttpClient) {}

  user: User = {
    loginId: 'tesrt',
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    email: 'email'
  };

  getUserById(loginId: string): Observable<User> {

    const url = `${this.userMgmtServiceUrl}/${loginId}`;
    console.log(url);
    return this.httpClient
      .get<User>(url);
    // this.user.loginId = loginId;
    // return of(this.user);
  }
}
