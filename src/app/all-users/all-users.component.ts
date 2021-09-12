import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUser:User[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((data)=>{
      console.log(data)
      this.allUser=data
    })
  }

}
