import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public RegisterForm=this.formBuilder.group({
    username:["",Validators.required],
    
    email:["",[Validators.email,Validators.required]],
    password:["",[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]]
  })

  constructor(public formBuilder:FormBuilder,public userservice:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let username=this.RegisterForm.controls["username"].value
    let email=this.RegisterForm.controls["email"].value
    let password=this.RegisterForm.controls["password"].value
    this.userservice.Register(username,email,password).subscribe(data=>console.log(data),err=>alert("err"))
  }
}
