import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm=this.formBuilder.group({

    username:["",Validators.required],
    password:["",[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]]

  })

  constructor(public formBuilder:FormBuilder,public userservice:UserService,public router:Router ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let username=this.loginForm.controls["username"].value
    let password=this.loginForm.controls["password"].value
    this.userservice.login(username,password).subscribe(
      data=>{
        localStorage.setItem("user",JSON.stringify(data))
        this.router.navigate(["/allUsers"])
      }
      ,err=>alert(err))
  }

}
