import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiService} from './api.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
baseurl = 'http:/localhost:3000';
  public userurl = this.baseurl + '/user/';

  constructor(private apiService: ApiService, private http: HttpClient) { }


  getUserData(userid) {
    return this.apiService.get(this.userurl + userid);
  }

  updateUserData(userid, userdto): Observable<any> {
    return this.apiService.put(this.userurl + userid, userdto);
  }
}
