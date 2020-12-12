import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})


export class AdminService {

  baseurl = 'http://localhost:3000';
  public userurl = this.baseurl + '/user/';
  public producturl = this.baseurl + '/products/';

  public alluser = this.baseurl + '/user';


  constructor(private apiService: ApiService) {
  }


  userDashboardData() {
    return this.apiService.get(this.userurl);
  }

  productDashboardData() {
    return this.apiService.get(this.producturl);
  }

  allUser(): Observable<any> {
    return this.apiService.get(this.alluser);
  }

  addUser(userdto): Observable<any> {
    return this.apiService.post(this.userurl, userdto);
  }


  singleUser(userid) {
    return this.apiService.get(this.userurl + userid);
  }

  editUser(userid, userdto): Observable<any> {
    return this.apiService.put(this.userurl + userid, userdto);
  }

  deleteUser(userid) {
    return this.apiService.delete(this.userurl + userid);
  }
}
