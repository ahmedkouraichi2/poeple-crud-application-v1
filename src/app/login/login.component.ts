import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any
  constructor(private fb:FormBuilder,private userServive:UsersService,private route:Router ) {
    let formControls={
      email: new FormControl('',[
        Validators.required,
        Validators.email

      ]),

      password : new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]

      )
    }
    this.loginForm= this.fb.group(formControls)

  }

  ngOnInit(): void {
  }
  login(){
    let data = this.loginForm.value;
    let user = new User("","",data.email,"",data.password);
    this.userServive.loginAdmin(user).subscribe(
      (res)=>{

      },
      (error)=>{
        console.log(error);

      }
      );}
}


   
