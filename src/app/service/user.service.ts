import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  onLogin(obj:any) {
    debugger;
    return this.http.post("https://projectapi.gerasim.in/api/Users/Login",obj);
  }

  getUsers() {
    return this.http.get("https://projectapi.gerasim.in/api/Users/GetAllUsers")
  }
 
  createNewUser(obj:any) {
    debugger;
    return this.http.post("https://projectapi.gerasim.in/api/Users/CreateUser",obj);
  }
  updateUser(obj:any) {
    debugger;
    return this.http.put("https://projectapi.gerasim.in/api/Users/updateUser",obj);
  }
  deletUserById(userId: number) {
    return this.http.delete("https://projectapi.gerasim.in/api/Users/DeleteUserById?id="+userId)
  }

  GetUserById(id: number) {
    return this.http.get("https://projectapi.gerasim.in/api/Users/GetUserById?id="+id)
  }
}
