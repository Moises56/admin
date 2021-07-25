import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  // tslint:disable-next-line:typedef
  signup(user: any){
   return this.http.post<any>(this.URL + '/signup', user);
  }

  // tslint:disable-next-line:typedef
  signIn(user: any){
   return this.http.post<any>(this.URL + '/signin', user);
  }

  // tslint:disable-next-line:typedef
  loggedIng(){
    return !!localStorage.getItem('token');
  }

  // tslint:disable-next-line:typedef
  getToken(){
    return localStorage.getItem('token');
  }

  // tslint:disable-next-line:typedef
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }


}
