import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseURL:string="http://localhost:56804"

  constructor(private httpclient:HttpClient) { }

  public Register(username:string,email:string,password:string)
  {
    const body={
      UserName:username,
      Email:email,
      Password:password
    }
    console.log(body)
   return this.httpclient.post(this.baseURL+"/api/UserController/RegisterUser",body)
  }

  public login(username:string,password:string)
  {
    const body={
      UserName:username,
      Password:password
    }
   return this.httpclient.post(this.baseURL+"/api/UserController/LoginUser",body)
  }

  public getAllUsers()
  {
    if(localStorage.getItem("user")!=null)
    {

    const header=new HttpHeaders({

      'Authorization':`Bearer ${JSON.parse(localStorage.getItem("user")).token}`
    })
    return this.httpclient.get<User[]>(this.baseURL+"/api/UserController/GetAllUsers",{headers:header})
  }
  else{
    alert("you should login first")
  }
}
}
