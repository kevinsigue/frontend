import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //provides the http client class
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  register(body:any){
    return this._http.post('http://127.0.0.1:3000/users/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }


 login(body:any) {
  return this._http.post('http://127.0.0.1:3000/users/login',body,{
    observe:'body',
    withCredentials:true,/*dcookie will not be available docuemts cookies */
    headers:new HttpHeaders().append('Content-Type','application/json')
  });  
}
}
